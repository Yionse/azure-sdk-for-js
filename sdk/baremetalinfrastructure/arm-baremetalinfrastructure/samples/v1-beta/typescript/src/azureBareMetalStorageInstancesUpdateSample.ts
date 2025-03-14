/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  Tags,
  BareMetalInfrastructureClient
} from "@azure/arm-baremetalinfrastructure";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Patches the Tags field of a Azure Bare Metal Storage instance for the specified subscription, resource group, and instance name.
 *
 * @summary Patches the Tags field of a Azure Bare Metal Storage instance for the specified subscription, resource group, and instance name.
 * x-ms-original-file: specification/baremetalinfrastructure/resource-manager/Microsoft.BareMetalInfrastructure/preview/2023-08-04-preview/examples/AzureBareMetalStorageInstances_PatchTags_Delete.json
 */
async function deleteTagsFieldOfAnAzureBareMetalStorageInstance() {
  const subscriptionId =
    process.env["BAREMETALINFRASTRUCTURE_SUBSCRIPTION_ID"] ||
    "f0f4887f-d13c-4943-a8ba-d7da28d2a3fd";
  const resourceGroupName =
    process.env["BAREMETALINFRASTRUCTURE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureBareMetalStorageInstanceName = "myABMSInstance";
  const tagsParameter: Tags = { tags: {} };
  const credential = new DefaultAzureCredential();
  const client = new BareMetalInfrastructureClient(credential, subscriptionId);
  const result = await client.azureBareMetalStorageInstances.update(
    resourceGroupName,
    azureBareMetalStorageInstanceName,
    tagsParameter
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Patches the Tags field of a Azure Bare Metal Storage instance for the specified subscription, resource group, and instance name.
 *
 * @summary Patches the Tags field of a Azure Bare Metal Storage instance for the specified subscription, resource group, and instance name.
 * x-ms-original-file: specification/baremetalinfrastructure/resource-manager/Microsoft.BareMetalInfrastructure/preview/2023-08-04-preview/examples/AzureBareMetalStorageInstances_PatchTags.json
 */
async function updateTagsFieldOfAnAzureBareMetalStorageInstance() {
  const subscriptionId =
    process.env["BAREMETALINFRASTRUCTURE_SUBSCRIPTION_ID"] ||
    "f0f4887f-d13c-4943-a8ba-d7da28d2a3fd";
  const resourceGroupName =
    process.env["BAREMETALINFRASTRUCTURE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureBareMetalStorageInstanceName = "myABMSInstance";
  const tagsParameter: Tags = { tags: { testkey: "testvalue" } };
  const credential = new DefaultAzureCredential();
  const client = new BareMetalInfrastructureClient(credential, subscriptionId);
  const result = await client.azureBareMetalStorageInstances.update(
    resourceGroupName,
    azureBareMetalStorageInstanceName,
    tagsParameter
  );
  console.log(result);
}

async function main() {
  deleteTagsFieldOfAnAzureBareMetalStorageInstance();
  updateTagsFieldOfAnAzureBareMetalStorageInstance();
}

main().catch(console.error);
