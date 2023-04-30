import { exit } from "process";

import { log } from "../log";
import { logError } from "../logError";

export const noFound = (type: "files" | "templates") => {
  console.log("\n");

  logError("No " + type + " found.");

  log("Please add droplet " + type + " to run this command.");

  console.log("\n");
  exit(0);
};
