/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets an environment definition from the catalog.
 *
 * @summary Gets an environment definition from the catalog.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/EnvironmentDefinitions_Get.json
 */
async function environmentDefinitionsGet() {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const devCenterName = "Contoso";
  const catalogName = "myCatalog";
  const environmentDefinitionName = "myEnvironmentDefinition";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.environmentDefinitions.get(
    resourceGroupName,
    devCenterName,
    catalogName,
    environmentDefinitionName,
  );
  console.log(result);
}

async function main() {
  environmentDefinitionsGet();
}

main().catch(console.error);
