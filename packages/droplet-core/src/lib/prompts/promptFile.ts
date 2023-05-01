import { prompt } from "@astrojs/cli-kit";
import { label } from "@ddddurk/kit";
import { exit } from "process";

import { colors } from "../colors";
import type { listFiles } from "../os";

export const promptFile = async (
  fileChoices: ReturnType<typeof listFiles>
) => {
  const { file } = await prompt({
    choices: fileChoices.map((fileChoice) => ({
      label: fileChoice.trimmedCleaned as string,
      value: fileChoice
    })),
    initial: fileChoices[0],
    label: label(colors.droplet, "template"),
    message: "File?",
    name: "file",
    type: "select"
  });

  if (!file) exit(0);

  return file;
};
