import { rpnCalculator } from "./app";
import { stack } from "./utils";

describe("RPN Calculator", () => {
  afterEach(() => {
    stack.splice(0, stack.length);
  });

  it("should make correct calculation when 1 1 + equals 2", async () => {
    rpnCalculator("1 1 +");
    expect(stack.toString()).toBe("2");
  });

  it("should make correct calculation when 5 2 * equals 10", async () => {
    rpnCalculator("5 2 *");
    expect(stack.toString()).toBe("10");
  });

  it("should make correct calculation when 3 4 / quals 0.75", async () => {
    rpnCalculator("3");
    rpnCalculator("4");
    rpnCalculator("/");
    expect(stack.toString()).toBe("0.75");
  });
});
