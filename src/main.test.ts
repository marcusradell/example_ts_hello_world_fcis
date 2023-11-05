import { main, GREETING } from "./main";

describe("main", () => {
  it("should return a greeting", () => {
    const result = main();
    expect(result).toEqual(GREETING);
  });
});
