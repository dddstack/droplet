import type { Options } from "@dddstack/droplet-options";
import { Command } from "commander";
import { cwd } from "process";

import { files, init, template } from "./commands";
import { wrapAction } from "./utilities";

export const commander = (
  options: Options = { fromDirectory: cwd(), toDirectory: cwd() }
) => {
  const program = new Command("Droplet");

  program.description("Droplet");

  program
    .command("files")
    .description("Droplet files.")
    .action(() => wrapAction(() => files(options)));

  program
    .command("init")
    .description("Initialize Droplet")
    .action(() => wrapAction(() => init(options)));

  program
    .command("template")
    .description("Droplet template.")
    .action(() => wrapAction(() => template(options)));

  return program;
};
