/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  SqlMigrationService,
  DataMigrationManagementClient
} from "@azure/arm-datamigration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or Update SQL Migration Service.
 *
 * @summary Create or Update SQL Migration Service.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/CreateOrUpdateMigrationServiceMAX.json
 */
async function createOrUpdateSqlMigrationServiceWithMaximumParameters(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlMigrationServiceName = "testagent";
  const parameters: SqlMigrationService = { location: "northeurope" };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.sqlMigrationServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlMigrationServiceName,
    parameters
  );
  console.log(result);
}

createOrUpdateSqlMigrationServiceWithMaximumParameters().catch(console.error);

/**
 * This sample demonstrates how to Create or Update SQL Migration Service.
 *
 * @summary Create or Update SQL Migration Service.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/CreateOrUpdateMigrationServiceMIN.json
 */
async function createOrUpdateSqlMigrationServiceWithMinimumParameters(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlMigrationServiceName = "testagent";
  const parameters: SqlMigrationService = { location: "northeurope" };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.sqlMigrationServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlMigrationServiceName,
    parameters
  );
  console.log(result);
}

createOrUpdateSqlMigrationServiceWithMinimumParameters().catch(console.error);
