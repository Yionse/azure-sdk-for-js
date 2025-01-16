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
 * This sample demonstrates how to Gets a list of workflows associated with the specified subscription.
 *
 * @summary Gets a list of workflows associated with the specified subscription.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-10-11-preview/examples/Workflow_List.json
 */
async function listWorkflows() {
  const subscriptionId =
    process.env["DEVHUB_SUBSCRIPTION_ID"] || "subscriptionId1";
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listWorkflows();
}

main().catch(console.error);
