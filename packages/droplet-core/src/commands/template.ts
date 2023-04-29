import { existsSync } from "fs";
import { join } from "path";
import { exit } from "process";
import prompts from "prompts";

import {
  drop,
  DROPLET_DIRECTORY_NAME,
  listFiles,
  listTemplates,
  log,
  promptDroplet,
  promptTemplates,
  promptTo
} from "../lib";
import type { Options } from "../types";
import { dropletNotFound } from "./logs";

export const template = (options: Options) => {
  log.droplet("Searching for Droplet templates...");

  console.log("\n");

  const DROPLET_DIRECTORY_PATH = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  if (!existsSync(DROPLET_DIRECTORY_PATH)) {
    dropletNotFound();
    exit(1);
  }

  prompts([
    promptTemplates(listTemplates(DROPLET_DIRECTORY_PATH)),
    promptTo,
    promptDroplet
  ]).then((answers) => {
    const { template, to, droplet } = answers;

    if (template && to && droplet) {
      console.log("\n");

      log.box("yellow", "Template", "Dropletting template...");

      drop(
        droplet,
        listFiles(
          template.original,
          join(DROPLET_DIRECTORY_PATH, template.trimmed)
        ),
        to,
        "template"
      );

      console.log("\n");

      log.box("green", "Success", "Droplet complete!");

      console.log("\n");
    }
  });
};
