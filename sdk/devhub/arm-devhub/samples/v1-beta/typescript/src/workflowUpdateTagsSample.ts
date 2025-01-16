/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, DeveloperHubServiceClient } from "@azure/arm-devhub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates tags on a workflow.
 *
 * @summary Updates tags on a workflow.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-10-11-preview/examples/Workflow_UpdateTags.json
 */
async function updateManagedClusterTags() {
  const subscriptionId =
    process.env["DEVHUB_SUBSCRIPTION_ID"] || "subscriptionId1";
  const resourceGroupName =
    process.env["DEVHUB_RESOURCE_GROUP"] || "resourceGroup1";
  const workflowName = "workflow1";
  const parameters: TagsObject = {
    tags: { promote: "false", resourceEnv: "testing" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const result = await client.workflowOperations.updateTags(
    resourceGroupName,
    workflowName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateManagedClusterTags();
}

main().catch(console.error);
