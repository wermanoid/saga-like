import { expect } from "chai";

import { saga } from "./saga";

function* testGen() {
  yield 1;
  yield 2;
}

describe("saga", () => {
  it("should", () => {
    const runner = saga(testGen);
  });
});
