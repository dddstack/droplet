import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from "fs";
import { basename, dirname, join } from "path";

import { compile } from "./compile";
import type { listFiles } from "./listFiles";
import { log } from "./log";

export const drop = (
  droplet: string,
  fileChoices: ReturnType<typeof listFiles>,
  toDirectory: string,
  type: "file" | "template"
) =>
  fileChoices.map((fileChoice) => {
    const toDirectoryFile = compile(
      join(
        toDirectory,
        (type === "file"
          ? basename(fileChoice.trimmedCleaned as string)
          : fileChoice.trimmedCleaned) as string
      ),
      droplet
    );
    const toDirectoryDirectory = dirname(toDirectoryFile);

    if (!existsSync(toDirectoryDirectory))
      mkdirSync(toDirectoryDirectory, { recursive: true });

    writeFileSync(
      toDirectoryFile,
      compile(readFileSync(fileChoice.original, "utf8"), droplet)
    );

    log.indent(toDirectoryFile);
  });
