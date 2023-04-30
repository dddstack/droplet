import { existsSync } from "fs";
import { join } from "path";

import type { DropletOptions } from "../droplet";
import { DROPLET_DIRECTORY_NAME } from "../lib";
import {
  drop,
  dropletNotFound,
  listFiles,
  listTemplates,
  log,
  logSuccess,
  noFound,
  promptLocation,
  promptTemplate,
  promptValue
} from "../lib";

export const template = async (options: DropletOptions) => {
  const DROPLET_DIRECTORY_PATH = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  if (!existsSync(DROPLET_DIRECTORY_PATH)) dropletNotFound();

  const templates = listTemplates(DROPLET_DIRECTORY_PATH);

  if (templates.length === 0) noFound("templates");

  const location = await promptLocation();

  const template = await promptTemplate(templates);

  const value = await promptValue();

  console.log("\n");

  log("Droplet in progress...");

  drop(
    value,
    listFiles(
      template.original,
      join(DROPLET_DIRECTORY_PATH, template.trimmed)
    ),
    location,
    "template"
  );

  console.log("\n");

  logSuccess("Droplet complete!");

  console.log("\n");
};
