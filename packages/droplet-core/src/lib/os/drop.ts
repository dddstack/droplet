import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from "fs";
import { basename, dirname, join } from "path";

import { log } from "../log";
import { compile } from "../text";
import type { listFiles } from "./listFiles";

export const drop = (
  droplet: string,
  fileChoices: ReturnType<typeof listFiles>,
  toDirectory: string,
  type: "file" | "template"
) =>
  fileChoices.map((fileChoice) => {
    const toDirectoryFile = compile(
      droplet,
      join(
        toDirectory,
        (type === "file"
          ? basename(fileChoice.trimmedCleaned as string)
          : fileChoice.trimmedCleaned) as string
      )
    );
    const toDirectoryDirectory = dirname(toDirectoryFile);

    if (!existsSync(toDirectoryDirectory))
      mkdirSync(toDirectoryDirectory, { recursive: true });

    writeFileSync(
      toDirectoryFile,
      compile(droplet, readFileSync(fileChoice.original, "utf8"))
    );

    log(fileChoice.original);
  });
