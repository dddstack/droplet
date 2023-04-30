import { prompt } from "@astrojs/cli-kit";
import { label } from "@ddddurk/kit";
import { exit } from "process";

import { colors } from "../colors";
import type { listTemplates } from "../os";

export const promptTemplate = async (
  templateChoices: ReturnType<typeof listTemplates>
) => {
  const { template } = await prompt({
    choices: templateChoices.map((templateChoice) => ({
      label: templateChoice.trimmedCleaned as string,
      value: templateChoice
    })),
    initial: templateChoices[0],
    label: label(colors.pink, "template"),
    message: "Template?",
    name: "template",
    type: "select"
  });

  if (!template) exit(0);

  return template;
};
