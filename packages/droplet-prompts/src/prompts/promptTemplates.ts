import type { listTemplates } from "@dddstack/droplet-list-templates";
import { PromptObject } from "prompts";

export const promptTemplates = (templateChoices: ReturnType<typeof listTemplates>): PromptObject => ({
  choices: templateChoices.map((templateChoice) => ({
    title: templateChoice,
    value: templateChoice
  })),
  instructions: false,
  message: "Droplet template?",
  name: "template",
  type: "select"
});
