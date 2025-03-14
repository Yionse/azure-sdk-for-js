/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ChaosManagementClient } from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a Capability Type resource for given Target Type and location.
 *
 * @summary Get a Capability Type resource for given Target Type and location.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/stable/2024-01-01/examples/GetCapabilityType.json
 */
async function getACapabilityTypeForAVirtualMachineTargetResourceOnWestus2Location(): Promise<void> {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] || "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const locationName = "westus2";
  const targetTypeName = "Microsoft-VirtualMachine";
  const capabilityTypeName = "Shutdown-1.0";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.capabilityTypes.get(locationName, targetTypeName, capabilityTypeName);
  console.log(result);
}

async function main(): Promise<void> {
  await getACapabilityTypeForAVirtualMachineTargetResourceOnWestus2Location();
}

main().catch(console.error);
