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
    label: label(colors.pink, "file"),
    message: "File?",
    name: "file",
    type: "select"
  });

  if (!file) exit(0);

  return file;
};
