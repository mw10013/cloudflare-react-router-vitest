import { describe, it, expect } from "vitest";

describe("Basic test machinery", () => {
  it("should pass a trivial test", () => {
    expect(1 + 1).toBe(2);
  });
});
