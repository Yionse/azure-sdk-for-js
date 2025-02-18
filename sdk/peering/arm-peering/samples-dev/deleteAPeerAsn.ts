/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Deletes an existing peer ASN with the specified name under the given subscription.
 *
 * @summary Deletes an existing peer ASN with the specified name under the given subscription.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/DeletePeerAsn.json
 */
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function deleteAPeerAsn(): Promise<void> {
  const subscriptionId = "subId";
  const peerAsnName = "peerAsnName";
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peerAsns.delete(peerAsnName);
  console.log(result);
}

deleteAPeerAsn().catch(console.error);
