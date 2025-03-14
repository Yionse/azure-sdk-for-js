// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Get all Program Briefs for an ACS Resource and Delete some
 */

import { ShortCodesClient } from "@azure-tools/communication-short-codes";

// Load the .env file if it exists
import "dotenv/config";

export async function main(): Promise<void> {
  console.log("\n== Get All Program Briefs and Delete Program Brief Sample ==\n");

  // You will need to set this environment variable or edit the following values
  const connectionString =
    process.env.COMMUNICATION_SAMPLES_CONNECTION_STRING ||
    "endpoint=https://resourceName.communication.azure.net/;accessKey=test-key";

  // create new client
  const client = new ShortCodesClient(connectionString);

  // get all program briefs for a resource
  const programBriefs = await client.listUSProgramBriefs({
    onResponse:
      (response) =>
      (res = response) => {
        if (!res || res.status !== 200) {
          throw new Error(
            `US Program briefs Listing failed.
          Status code: ${res.status}; 
          Error: ${res.bodyAsText}; 
          CV: ${res.headers.get("MS-CV")}`,
          );
        }
      },
  });
  // find draft program briefs, and delete them
  for await (const programBrief of programBriefs) {
    console.log(`Program Brief with Id ${programBrief.id} has status ${programBrief.status}`);
  }
}

main().catch((error) => {
  console.log("The sample getAllProgramBriefs encountered an error:", error);
  process.exit(1);
});
