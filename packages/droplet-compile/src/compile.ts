import handlebars from "handlebars"

export const compile = (content: string, droplet: string) =>
  handlebars.compile(content)({ droplet });
