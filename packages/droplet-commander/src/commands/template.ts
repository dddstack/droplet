import { DROPLET_DIRECTORY_NAME } from "@dddstack/droplet-constants";
import { drop } from "@dddstack/droplet-drop";
import { listFiles } from "@dddstack/droplet-list-files";
import { listTemplates } from "@dddstack/droplet-list-templates";
import { log } from "@dddstack/droplet-log";
import { Options } from "@dddstack/droplet-options";
import { promptDroplet, promptFiles, promptTemplates, promptTo } from "@dddstack/droplet-prompts";
import chalk from "chalk";
import { existsSync } from "fs";
import { join } from "path";
import { exit } from "process";
import prompts from "prompts";

export const template = (options: Options) => {
  const DROPLET_DIRECTORY_PATH = join(options.fromDirectory, DROPLET_DIRECTORY_NAME);

  if (!existsSync(DROPLET_DIRECTORY_PATH)) {
    log({ message: `Droplet not found...To initialize Droplet, please run:\n\n${chalk.bold("droplet init")}\n`, type: "error" });
    exit(1);
  }

  prompts([
    promptTemplates(listTemplates(DROPLET_DIRECTORY_PATH)),
    promptTo,
    promptDroplet
  ]).then((answers) => {
    const { template, to, droplet } = answers;

    if (template && to && droplet) {
      log({ command: "TEMPLATE", message: "Dropletting template...", status: 1, statusOf: 2, type: "status" });

      drop(droplet, listFiles(template.original, join(DROPLET_DIRECTORY_PATH, template.trimmed)), to, "template");

      log({ command: "TEMPLATE", message: "Droplet complete!", status: 2, statusOf: 2, type: "status" });
    }
  });
};
