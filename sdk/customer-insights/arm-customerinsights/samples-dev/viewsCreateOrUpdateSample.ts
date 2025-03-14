/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { ViewResourceFormat } from "@azure/arm-customerinsights";
import { CustomerInsightsManagementClient } from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a view or updates an existing view in the hub.
 *
 * @summary Creates a view or updates an existing view in the hub.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/ViewsCreateOrUpdate.json
 */
async function viewsCreateOrUpdate(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const viewName = "testView";
  const parameters: ViewResourceFormat = {
    definition: '{\\"isProfileType\\":false,\\"profileTypes\\":[],\\"widgets\\":[],\\"style\\":[]}',
    displayName: { en: "some name" },
    userId: "testUser",
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(credential, subscriptionId);
  const result = await client.views.createOrUpdate(
    resourceGroupName,
    hubName,
    viewName,
    parameters,
  );
  console.log(result);
}

viewsCreateOrUpdate().catch(console.error);
