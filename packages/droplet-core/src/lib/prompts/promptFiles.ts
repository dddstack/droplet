import type { PromptObject } from "prompts";

import type { listFiles } from "../listFiles";

export const promptFiles = (
  fileChoices: ReturnType<typeof listFiles>
): PromptObject => ({
  choices: fileChoices.map((fileChoice) => ({
    title: fileChoice.trimmedCleaned as string,
    value: fileChoice
  })),
  instructions: false,
  message: "Droplet files?",
  name: "files",
  type: "multiselect"
});
