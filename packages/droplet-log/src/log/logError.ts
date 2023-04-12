import chalk from "chalk";

import type { Log } from "../log.types";

export const logError = (log: Log<"error">) =>
  console.error(`${chalk.red("ERROR")} ${log.message}`);
