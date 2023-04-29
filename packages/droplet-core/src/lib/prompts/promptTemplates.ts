import type { PromptObject } from "prompts";

import type { listTemplates } from "../listTemplates";

export const promptTemplates = (
  templateChoices: ReturnType<typeof listTemplates>
): PromptObject => ({
  choices: templateChoices.map((templateChoice) => ({
    title: templateChoice.trimmedCleaned as string,
    value: templateChoice
  })),
  instructions: false,
  message: "Droplet template?",
  name: "template",
  type: "select"
});
