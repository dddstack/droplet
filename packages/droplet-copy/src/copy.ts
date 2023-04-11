import { log } from "@dddstack/droplet-log";
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync
} from "fs";
import { join } from "path";

export const copy = (copyDirectory: string, toDirectory: string) =>
  readdirSync(copyDirectory).map((dirFile) => {
    const copyDirectoryDirFile = join(copyDirectory, dirFile);
    const toDirectoryDirFile = join(toDirectory, dirFile);

    if (lstatSync(copyDirectoryDirFile).isDirectory())
      return copy(copyDirectoryDirFile, toDirectoryDirFile);

    if (!existsSync(toDirectory)) mkdirSync(toDirectory, { recursive: true });

    copyFileSync(copyDirectoryDirFile, toDirectoryDirFile);

    log({ file: toDirectoryDirFile, type: "file" });
  });
