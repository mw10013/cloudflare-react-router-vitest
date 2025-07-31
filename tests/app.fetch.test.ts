import { describe, it, expect } from "vitest";
import app from "../workers/app";

describe("app.fetch", () => {
  it("should respond with HTML for the root path on localhost with empty env and ctx", async () => {
    const response = await app.fetch(
      // @ts-expect-error TS2345: Argument of type 'Request<unknown, CfProperties<unknown>>' is not assignable to parameter of type 'Request<unknown, IncomingRequestCfProperties<unknown>>'.
      new Request("http://localhost:5173/"),
      {},
      {}
    );
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("text/html");
  });
});
