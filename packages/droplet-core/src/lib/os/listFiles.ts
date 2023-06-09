import { lstatSync, readdirSync } from "fs";
import { join } from "path";

import {
  DROPLET_DIRECTORY_NAME,
  DROPLET_FILE_PREFIX
} from "../constants";
import { clean, trim } from "../text";

export const listFiles = (
  path: string,
  rootPath?: string
): {
  cleaned: string;
  original: string;
  trimmed: string;
  trimmedCleaned?: string;
}[] =>
  readdirSync(path)
    .map((pathPath) => {
      const joinedPathPathPath = join(path, pathPath);

      if (
        lstatSync(joinedPathPathPath).isDirectory() &&
        pathPath.startsWith(DROPLET_DIRECTORY_NAME)
      )
        return listFiles(joinedPathPathPath, rootPath ?? path);

      if (
        pathPath.startsWith(DROPLET_FILE_PREFIX) &&
        pathPath.endsWith(".hbs")
      )
        return {
          cleaned: clean(pathPath),
          original: joinedPathPathPath,
          trimmed: trim(joinedPathPathPath, rootPath ?? path),
          trimmedCleaned: clean(
            trim(joinedPathPathPath, rootPath ?? path)
          )
        };

      return [];
    })
    .flat();
