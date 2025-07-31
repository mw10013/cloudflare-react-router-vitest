import { describe, it, expect } from "vitest";
import app from "../workers/app";

describe("app.fetch", () => {
  it("should return something for localhost:5173", async () => {
    // @ts-ignore
    const response = await app.fetch(
      new Request("http://localhost:5173/"),
      {},
      {}
    );
    console.log("Response:", response);
    console.log("body", await response.text());
    expect(response).toBeDefined();
  });
});
