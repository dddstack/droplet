import { Command } from "commander";
import { cwd } from "process";

import { boxVersion } from "./boxVersion";
import { commands, file, init, template } from "./commands";

export type DropletOptions = {
  fromDirectory: string;
  toDirectory: string;
};

export const droplet = (
  options: DropletOptions = {
    fromDirectory: cwd(),
    toDirectory: cwd()
  }
) => {
  const program = new Command("Droplet");

  program.helpOption(false);

  program
    .command("--dropletcommands", { isDefault: true })
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(() => commands());

  program
    .command("file")
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(async () => await file(options));

  program
    .command("init")
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(() => init(options));

  program
    .command("template")
    .helpOption(false)
    .hook("preAction", () => boxVersion())
    .action(async () => await template(options));

  return program;
};
