import chalk from "chalk";

import { Log } from "../log.types";

export const logStatus = (log: Log<"status">) =>
  console.log(`${chalk.yellow(log.command)} [${log.statusOf}/${log.status}] ${log.message}`);
