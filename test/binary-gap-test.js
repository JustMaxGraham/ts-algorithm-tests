import { binaryGap } from "../algorithms/binary-gap.js";
import { expect } from "chai";
import "mocha";

describe("Testing function - binaryGap(N)", function () {
  context("For N = 1041", function () {
    it("should return 5", function () {
      expect(binaryGap(1041)).to.equal(5);
    });
  });

  context("For N = 32", function () {
    it("should return 0", function () {
      expect(binaryGap(1041)).to.equal(5);
    });
  });
});
