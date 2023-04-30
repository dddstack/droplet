import { compile } from "../src/lib";

describe("compile", () => {
  it("should compile handlebars content", () =>
    expect(compile("test", "{{droplet}}")).toEqual("test"));
});
