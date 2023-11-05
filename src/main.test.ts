import { main, GREETING_PREFIX } from "./main";

describe("main", () => {
  it("should log a message", () => {
    const log = jest.fn();
    main({ log });
    expect(log).toHaveBeenCalledWith(GREETING_PREFIX);
  });
});
