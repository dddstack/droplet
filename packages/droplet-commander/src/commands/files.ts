import { DROPLET_DIRECTORY_NAME } from "@dddstack/droplet-constants";
import { drop } from "@dddstack/droplet-drop";
import { listFiles } from "@dddstack/droplet-list-files";
import { log } from "@dddstack/droplet-log";
import { Options } from "@dddstack/droplet-options";
import { promptDroplet, promptFiles, promptTo } from "@dddstack/droplet-prompts";
import { existsSync } from "fs";
import { join } from "path";
import prompts from "prompts";
import chalk from "chalk";
import { exit } from "process";

export const files = (options: Options) => {
  const DROPLET_DIRECTORY_PATH = join(options.fromDirectory, DROPLET_DIRECTORY_NAME);

  if (!existsSync(DROPLET_DIRECTORY_PATH)) {
    log({ message: `Droplet not found...To initialize Droplet, please run:\n\n${chalk.bold("droplet init")}\n`, type: "error" });
    exit(1);
  }

  prompts([
    promptFiles(listFiles(DROPLET_DIRECTORY_PATH)),
    promptTo,
    promptDroplet
  ]).then((answers) => {
    const { files, to, droplet } = answers;

    if (files && to && droplet) {

      log({ command: "FILES", message: "Dropletting files...", status: 1, statusOf: 2, type: "status" });

      drop(droplet, files, to, "file");

      log({ command: "FILES", message: "Droplet complete!", status: 2, statusOf: 2, type: "status" });
    }
  });
};
