/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { LabServicesClient } from "@azure/arm-labservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Action to redeploy a lab virtual machine to a different compute node. For troubleshooting connectivity.
 *
 * @summary Action to redeploy a lab virtual machine to a different compute node. For troubleshooting connectivity.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/stable/2022-08-01/examples/VirtualMachines/redeployVirtualMachine.json
 */
async function redeployVirtualMachine(): Promise<void> {
  const subscriptionId =
    process.env["LABSERVICES_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["LABSERVICES_RESOURCE_GROUP"] || "testrg123";
  const labName = "testlab";
  const virtualMachineName = "template";
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginRedeployAndWait(
    resourceGroupName,
    labName,
    virtualMachineName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await redeployVirtualMachine();
}

main().catch(console.error);
