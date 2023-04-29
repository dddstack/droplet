import { Command } from "commander";
import { cwd } from "process";

import { boxVersion } from "./boxVersion";
import { files, help, init, template } from "./commands";
import type { Options } from "./types";

export const dropletCommander = (
  options: Options = { fromDirectory: cwd(), toDirectory: cwd() }
) => {
  const program = new Command("Droplet");

  program.helpOption(false);

  program
    .command("help", { isDefault: true })
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(() => help());

  program
    .command("files")
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(() => files(options));

  program
    .command("init")
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(() => init(options));

  program
    .command("template")
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(() => template(options));

  return program;
};
