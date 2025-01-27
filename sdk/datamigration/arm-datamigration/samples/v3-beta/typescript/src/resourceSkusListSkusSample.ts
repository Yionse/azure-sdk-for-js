/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { DataMigrationManagementClient } from "@azure/arm-datamigration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The skus action returns the list of SKUs that DMS supports.
 *
 * @summary The skus action returns the list of SKUs that DMS supports.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/ResourceSkus_ListSkus.json
 */
async function listSkus(): Promise<void> {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourceSkus.listSkus()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSkus().catch(console.error);
