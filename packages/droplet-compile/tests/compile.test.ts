import { compile } from "../src";

describe("compile", () => {
  it("should compile handlebars content", () =>
    expect(compile("{{droplet}}", "test")).toEqual("test"));
});
