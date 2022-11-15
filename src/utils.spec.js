import { Utils, stack } from "./utils";

describe("Utils", () => {
  afterEach(() => {
    stack.splice(0, stack.length);
  });

  it("isNotArithmeticOperation should return true when a value thats not an arithmetic operation", async () => {
    const response = Utils.isNotArithmeticOperation(2);
    expect(response).toBe(true);
  });

  it("isNotArithmeticOperation should return false when a value is an arithmetic operation", async () => {
    const response = Utils.isNotArithmeticOperation("/");
    expect(response).toBe(false);
  });

  it("containsOnlyNumbers should return true when a value is an number", async () => {
    const response = Utils.containsOnlyNumbers(-2);
    expect(response).toBe(true);
  });

  it("containsOnlyNumbers should return false when a value is not number", async () => {
    const response = Utils.containsOnlyNumbers("");
    expect(response).toBe(false);
  });
});
