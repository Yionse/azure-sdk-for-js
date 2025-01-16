/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  MsixPackagePatch,
  MsixPackagesUpdateOptionalParams,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an  MSIX Package.
 *
 * @summary Update an  MSIX Package.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/MsixPackage_Update.json
 */
async function msixPackageUpdate(): Promise<void> {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const hostPoolName = "hostpool1";
  const msixPackageFullName = "msixpackagefullname";
  const msixPackage: MsixPackagePatch = {
    displayName: "displayname",
    isActive: true,
    isRegularRegistration: false,
  };
  const options: MsixPackagesUpdateOptionalParams = { msixPackage };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.msixPackages.update(
    resourceGroupName,
    hostPoolName,
    msixPackageFullName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  msixPackageUpdate();
}

main().catch(console.error);
