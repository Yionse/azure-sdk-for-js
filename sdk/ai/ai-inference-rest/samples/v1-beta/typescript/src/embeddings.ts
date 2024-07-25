// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to get embeddings from a model endpoint.
 *
 * @summary get embeddings.
 */

import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";

export async function main() {
  console.log("== Chat Completions Sample ==");
  const credential = new DefaultAzureCredential();

  const key = process.env.API_KEY || "<api-key>";
  const client = ModelClient(endpoint, new AzureKeyCredential(key));
  const response = await client.path("/embeddings").post({
    body: {
      input: ["first phrase", "second phrase", "third phrase"]
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }
  for (const data of response.body.data) {
    console.log(data);
  }
  console.log(response.body.usage);

}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
