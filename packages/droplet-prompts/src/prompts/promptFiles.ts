import type { listFiles } from "@dddstack/droplet-list-files";
import type { PromptObject } from "prompts";

export const promptFiles = (
  fileChoices: ReturnType<typeof listFiles>
): PromptObject => ({
  choices: fileChoices.map((fileChoice) => ({
    title: fileChoice.trimmedCleaned,
    value: fileChoice
  })),
  instructions: false,
  message: "Droplet files?",
  name: "files",
  type: "multiselect"
});
