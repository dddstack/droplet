import chalk from "chalk";
import { Log } from "../log.types";

export const logError = (log: Log<"error">) =>
  console.error(chalk.red(log.message));
