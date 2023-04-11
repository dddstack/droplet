import { DROPLET_DIRECTORY_NAME } from "@dddstack/droplet-constants";
import { drop } from "@dddstack/droplet-drop";
import { listFiles } from "@dddstack/droplet-list-files";
import { log } from "@dddstack/droplet-log";
import { Options } from "@dddstack/droplet-options";
import { promptDroplet, promptFiles, promptTo } from "@dddstack/droplet-prompts";
import { join } from "path";
import prompts from "prompts";

export const files = (options: Options) => {
  const DROPLET_DIRECTORY_PATH = join(options.fromDirectory, DROPLET_DIRECTORY_NAME);

  prompts([
    promptFiles(listFiles(DROPLET_DIRECTORY_PATH)),
    promptTo,
    promptDroplet
  ]).then((answers) => {
    const { files, to, droplet } = answers;

    log({ command: "FILES", message: "Dropletting files...", status: 1, statusOf: 2, type: "status" });

    drop(droplet, files, to, "file");

    log({ command: "FILES", message: "Droplet complete!", status: 2, statusOf: 2, type: "status" });
  });
};
