import chalk from "chalk";

import { version } from "../package.json";
import { colors } from "./lib";
import { logDroplet } from "./lib/log/logDroplet";

export const boxVersion = () =>
  logDroplet(
    chalk.hex(colors.pink)("v" + version) +
      " @ddddstack/droplet initiated."
  );
