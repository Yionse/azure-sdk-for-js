/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ProvisioningServiceDescription,
  IotDpsClient
} from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.
 *
 * @summary Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSCreate.json
 */
async function dpsCreate(): Promise<void> {
  const subscriptionId =
    process.env["DEVICEPROVISIONINGSERVICES_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["DEVICEPROVISIONINGSERVICES_RESOURCE_GROUP"] ||
    "myResourceGroup";
  const provisioningServiceName = "myFirstProvisioningService";
  const iotDpsDescription: ProvisioningServiceDescription = {
    location: "East US",
    properties: { enableDataResidency: false },
    sku: { name: "S1", capacity: 1 },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.iotDpsResource.beginCreateOrUpdateAndWait(
    resourceGroupName,
    provisioningServiceName,
    iotDpsDescription
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.
 *
 * @summary Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSUpdate.json
 */
async function dpsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["DEVICEPROVISIONINGSERVICES_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["DEVICEPROVISIONINGSERVICES_RESOURCE_GROUP"] ||
    "myResourceGroup";
  const provisioningServiceName = "myFirstProvisioningService";
  const iotDpsDescription: ProvisioningServiceDescription = {
    identity: {
      type: "SystemAssigned,UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/91d126603dec467aBe2a213b5544ddc0/resourcegroups/testrg/providers/MicrosoftManagedIdentity/userAssignedIdentities/testidentity": {}
      }
    },
    location: "East US",
    properties: { enableDataResidency: false },
    sku: { name: "S1", capacity: 1 },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.iotDpsResource.beginCreateOrUpdateAndWait(
    resourceGroupName,
    provisioningServiceName,
    iotDpsDescription
  );
  console.log(result);
}

async function main(): Promise<void> {
  dpsCreate();
  dpsUpdate();
}

main().catch(console.error);
