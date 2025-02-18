/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @summary Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreatePeeringWithExchangeRouteServer.json
 */
import type { Peering } from "@azure/arm-peering";
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function createAPeeringWithExchangeRouteServer(): Promise<void> {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const peering: Peering = {
    direct: {
      connections: [
        {
          bandwidthInMbps: 10000,
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000,
            maxPrefixesAdvertisedV6: 100,
            microsoftSessionIPv4Address: "192.168.0.123",
            peerSessionIPv4Address: "192.168.0.234",
            sessionPrefixV4: "192.168.0.0/24",
          },
          connectionIdentifier: "5F4CB5C7-6B43-4444-9338-9ABC72606C16",
          peeringDBFacilityId: 99999,
          sessionAddressProvider: "Peer",
          useForPeeringService: true,
        },
      ],
      directPeeringType: "IxRs",
      peerAsn: {
        id: "/subscriptions/subId/providers/Microsoft.Peering/peerAsns/myAsn1",
      },
    },
    kind: "Direct",
    location: "eastus",
    peeringLocation: "peeringLocation0",
    sku: { name: "Premium_Direct_Free" },
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peerings.createOrUpdate(resourceGroupName, peeringName, peering);
  console.log(result);
}

createAPeeringWithExchangeRouteServer().catch(console.error);
