import { prompt } from "@astrojs/cli-kit";
import { label } from "@ddddurk/kit";
import { exit } from "process";

import { colors } from "../colors";

export const promptLocation = async () => {
  const { location } = await prompt({
    initial: "./",
    label: label(colors.droplet, "template"),
    message: "Location?",
    name: "location",
    type: "text"
  });

  if (!location) exit(0);

  return location;
};
