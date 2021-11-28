import rotate from "../algorithms/array-shift";
import { expect } from "chai";
import "mocha";

describe("Testing function - rotate(A, K)", function () {
  context("For A = [3, 8, 9, 7, 6], K = 3", function () {
    it("should return [9, 7, 6, 3, 8]", function () {
      expect(rotate([3, 8, 9, 7, 6], 3)).to.eql([9, 7, 6, 3, 8]);
    });
  });
});
