import { DROPLET_DIRECTORY_NAME, DROPLET_TEMPLATE_PREFIX } from "@dddstack/droplet-constants";
import { lstatSync, readdirSync } from "fs";
import { join } from "path";

export const listTemplates = (path: string): string[] =>
  readdirSync(path).map((pathPath) => {
    const joinedPathPathPath = join(path, pathPath);

    if (lstatSync(joinedPathPathPath).isDirectory())
      return pathPath.startsWith(DROPLET_TEMPLATE_PREFIX)
        ? joinedPathPathPath
        : pathPath.startsWith(DROPLET_DIRECTORY_NAME)
          ? listTemplates(joinedPathPathPath)
          : [];

    return [];
  }).flat();
