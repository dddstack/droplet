import { gradient } from "@dddstack/droplet-gradient";
import type { Options } from "@dddstack/droplet-options";
import { Command } from "commander";
import { cwd } from "process";

import { files, init, template } from "./commands";

export const commander = (
  options: Options = { fromDirectory: cwd(), toDirectory: cwd() }
) => {
  const program = new Command("Droplet");

  program.description("Droplet");

  program
    .command("files")
    .description("Droplet files.")
    .action(() => files(options));

  program
    .command("init")
    .description("Initialize Droplet")
    .action(() => init(options));

  program
    .command("template")
    .description("Droplet template.")
    .action(() => template(options));

  program.hook("preAction", () => gradient());

  return program;
};
