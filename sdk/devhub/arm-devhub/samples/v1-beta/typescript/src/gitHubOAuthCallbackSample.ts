/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DeveloperHubServiceClient } from "@azure/arm-devhub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Callback URL to hit once authenticated with GitHub App to have the service store the OAuth token.
 *
 * @summary Callback URL to hit once authenticated with GitHub App to have the service store the OAuth token.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-10-11-preview/examples/GitHubOAuthCallback.json
 */
async function gitHubOAuthCallback() {
  const subscriptionId =
    process.env["DEVHUB_SUBSCRIPTION_ID"] || "subscriptionId1";
  const location = "eastus2euap";
  const code = "3584d83530557fdd1f46af8289938c8ef79f9dc5";
  const state = "12345678-3456-7890-5678-012345678901";
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const result = await client.gitHubOAuthCallback(location, code, state);
  console.log(result);
}

async function main() {
  gitHubOAuthCallback();
}

main().catch(console.error);
