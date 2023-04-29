import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { box, indent } from "@ddddurk/cli-kit";
import chalk from "chalk";

const cyan = require("@ddddurk/colors/colors/cyan.json");
const green = require("@ddddurk/colors/colors/green.json");
const pink = require("@ddddurk/colors/colors/pink.json");
const red = require("@ddddurk/colors/colors/red.json");
const yellow = require("@ddddurk/colors/colors/yellow.json");

export const log = {
  box: (
    color: "green" | "red" | "yellow",
    flag: string,
    text: string
  ) =>
    box(
      color === "green"
        ? green[500]
        : color === "red"
        ? red[500]
        : yellow[500],
      flag,
      12,
      text
    ),
  droplet: (text: string) => box(cyan[500], "Droplet", 12, text),
  indent: (text: string) =>
    console.log(indent(12, 75, 16, text)),
  pink: (text: string) => chalk.hex(pink[500])(text)
};
