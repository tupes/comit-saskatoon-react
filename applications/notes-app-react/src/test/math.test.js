import chai from "chai";
import * as math from "../utils/math.js";

describe("math", function () {
  describe("double", function () {
    it("should accept a number and double it", function () {
      const num = 2;
      const result = math.double(num);
      chai.expect(result).to.equal(4);
    });

    it("should always return 0 when given a 0", function () {
      const num = 0;
      const result = math.double(num);
      chai.expect(result).to.equal(0);
    });
  });
});
