// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheClient } from "@azure/arm-connectedcache";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to this api gets ispCacheNode resource information
 *
 * @summary this api gets ispCacheNode resource information
 * x-ms-original-file: 2023-05-01-preview/IspCacheNodesOperations_Get_MaximumSet_Gen.json
 */
async function ispCacheNodesGetResourceGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const client = new ConnectedCacheClient(credential, subscriptionId);
  const result = await client.ispCacheNodesOperations.get(
    "rgConnectedCache",
    "sgtqjsitdrskmgyrrkntszwrrjjkretscpjgaezraucvcwececlelcsorfunrnvxyxcsrg",
    "lbsziwmudcjnwnwy",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await ispCacheNodesGetResourceGeneratedByMaximumSetRule();
}

main().catch(console.error);
