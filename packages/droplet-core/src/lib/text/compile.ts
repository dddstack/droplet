import handlebars from "handlebars";

export const compile = (droplet: string, text: string) =>
  handlebars.compile(text)({ droplet });
