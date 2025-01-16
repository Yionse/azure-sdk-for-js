/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ProjectUpdate, DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Partially updates a project.
 *
 * @summary Partially updates a project.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/Projects_Patch.json
 */
async function projectsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const projectName = "DevProject";
  const body: ProjectUpdate = {
    description: "This is my first project.",
    catalogSettings: { catalogItemSyncTypes: ["EnvironmentDefinition"] },
    displayName: "Dev",
    tags: { costCenter: "R&D" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.projects.beginUpdateAndWait(
    resourceGroupName,
    projectName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  projectsUpdate();
}

main().catch(console.error);
