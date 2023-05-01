import { prompt } from "@astrojs/cli-kit";
import { label } from "@ddddurk/kit";
import { exit } from "process";

import { colors } from "../colors";

export const promptValue = async () => {
  const { value } = await prompt({
    initial: "droplet",
    label: label(colors.droplet, "value"),
    message: "Value?",
    name: "value",
    type: "text"
  });

  if (!value) exit(0);

  return value;
};
