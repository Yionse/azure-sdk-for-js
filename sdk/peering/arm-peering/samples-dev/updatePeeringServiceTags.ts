/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Updates tags for a peering service with the specified name under the given subscription and resource group.
 *
 * @summary Updates tags for a peering service with the specified name under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/UpdatePeeringServiceTags.json
 */
import type { ResourceTags } from "@azure/arm-peering";
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function updatePeeringServiceTags(): Promise<void> {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringServiceName = "peeringServiceName";
  const tags: ResourceTags = { tags: { tag0: "value0", tag1: "value1" } };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peeringServices.update(resourceGroupName, peeringServiceName, tags);
  console.log(result);
}

updatePeeringServiceTags().catch(console.error);
