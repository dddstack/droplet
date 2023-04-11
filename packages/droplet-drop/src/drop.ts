import { compile } from "@dddstack/droplet-compile";
import { listFiles } from "@dddstack/droplet-list-files";
import { log } from "@dddstack/droplet-log";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";

export const drop = (droplet: string, fileChoices: ReturnType<typeof listFiles>, toDirectory: string, type: "file" | "template") =>
  fileChoices.map((fileChoice) => {
    const toDirectoryFile = compile(droplet, join(toDirectory, type === "file" ? basename(fileChoice.trimmedCleaned) : fileChoice.trimmedCleaned));
    const toDirectoryDirectory = dirname(toDirectoryFile);

    if (!existsSync(toDirectoryDirectory)) mkdirSync(toDirectoryDirectory, { recursive: true });

    writeFileSync(
      toDirectoryFile,
      compile(droplet, readFileSync(fileChoice.original, "utf8"))
    );

    log({ file: toDirectoryFile, type: "file" });
  });
