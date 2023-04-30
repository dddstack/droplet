import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync
} from "fs";
import { join } from "path";

import { log } from "../log";

export const copy = (
  copyDirectory: string,
  toDirectory: string
) =>
  readdirSync(copyDirectory).map((dirFile) => {
    const copyDirectoryDirFile = join(copyDirectory, dirFile);
    const toDirectoryDirFile = join(toDirectory, dirFile);

    if (lstatSync(copyDirectoryDirFile).isDirectory()) {
      copy(copyDirectoryDirFile, toDirectoryDirFile);
      return;
    }

    if (!existsSync(toDirectory))
      mkdirSync(toDirectory, { recursive: true });

    copyFileSync(copyDirectoryDirFile, toDirectoryDirFile);

    log(toDirectoryDirFile);
  });
