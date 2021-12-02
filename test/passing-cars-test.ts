import countCars from "../algorithms/passing-cars";
import { expect } from "chai";
import "mocha";

describe("Testing function - countCars(A)", function () {
  context("For A = [0,1,0,1,1]", function () {
    it("should return 5", function () {
      expect(countCars([0,1,0,1,1])).to.equal(5);
    });
  });
});

// Currently works, but with efficiency O(N^2), trying to make O(N)