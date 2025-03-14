/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  GenerateUploadUriParameter,
  DevTestLabsClient
} from "@azure/arm-devtestlabs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Generate a URI for uploading custom disk images to a Lab.
 *
 * @summary Generate a URI for uploading custom disk images to a Lab.
 * x-ms-original-file: specification/devtestlabs/resource-manager/Microsoft.DevTestLab/stable/2018-09-15/examples/Labs_GenerateUploadUri.json
 */
async function labsGenerateUploadUri(): Promise<void> {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "resourceGroupName";
  const name = "{labName}";
  const generateUploadUriParameter: GenerateUploadUriParameter = {
    blobName: "{blob-name}"
  };
  const credential = new DefaultAzureCredential();
  const client = new DevTestLabsClient(credential, subscriptionId);
  const result = await client.labs.generateUploadUri(
    resourceGroupName,
    name,
    generateUploadUriParameter
  );
  console.log(result);
}

labsGenerateUploadUri().catch(console.error);
