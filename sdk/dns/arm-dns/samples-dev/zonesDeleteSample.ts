/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DnsManagementClient } from "@azure/arm-dns";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.
 *
 * @summary Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/DeleteZone.json
 */
async function deleteZone(): Promise<void> {
  const subscriptionId = process.env["DNS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["DNS_RESOURCE_GROUP"] || "rg1";
  const zoneName = "zone1";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.zones.beginDeleteAndWait(
    resourceGroupName,
    zoneName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteZone();
}

main().catch(console.error);
