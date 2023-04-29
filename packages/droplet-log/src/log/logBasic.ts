import type { Log } from "../log.types";

export const logBasic = (log: Log<"basic">) =>
  console.log(log.message);
