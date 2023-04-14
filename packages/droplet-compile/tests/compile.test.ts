import { compile } from "../dist";

describe("compile", () => {
  it("should compile handlebars content", () =>
    expect(compile("{{droplet}}", "test")).toEqual("test"));
});
