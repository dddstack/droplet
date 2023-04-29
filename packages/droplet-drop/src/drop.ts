import { compile } from "@dddstack/droplet-compile";
import type { listFiles } from "@dddstack/droplet-list-files";
import { log } from "@dddstack/droplet-log";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from "fs";
import { basename, dirname, join } from "path";

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
        type === "file"
          ? basename(fileChoice.trimmedCleaned)
          : fileChoice.trimmedCleaned
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

    log({ file: toDirectoryFile, type: "file" });
  });
