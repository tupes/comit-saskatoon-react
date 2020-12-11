import * as math from "../../utils/math.js";

describe("math", () => {
  describe("double", () => {
    it("should take a number and double it", () => {
      const num = 2;
      const result = math.double(num);
      expect(result).toBe(4);
    });

    it("should always return 0 when provided a 0", () => {
      const num = 0;
      const result = math.double(num);
      expect(result).toBe(0);
    });
  });

  describe("halve", () => {});
});
