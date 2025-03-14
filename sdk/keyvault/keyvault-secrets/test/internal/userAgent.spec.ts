// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SDK_VERSION } from "../../src/constants.js";
import { SecretClient } from "../../src/index.js";
import { describe, it, assert } from "vitest";

describe("Secrets client's user agent (only in Node, because of fs)", () => {
  it("SDK_VERSION and user-agent should match", async () => {
    let userAgent: string | undefined;
    const client = new SecretClient(
      "https://myvault.vault.azure.net",
      { getToken: () => Promise.resolve({ token: "my-token", expiresOnTimestamp: Date.now() }) },
      {
        httpClient: {
          sendRequest: async (request) => {
            userAgent = request.headers.get("user-agent") ?? request.headers.get("x-ms-useragent");
            throw new Error("only a test");
          },
        },
      },
    );

    try {
      await client.getSecret("foo");
    } catch {
      // no-op, we don't care about the response, only the user-agent header
    }
    assert.exists(userAgent, "Expected a User-Agent header to be sent");
    assert.include(userAgent!, `azsdk-js-keyvault-secrets/${SDK_VERSION}`);
  });
});
