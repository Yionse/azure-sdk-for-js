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
  ServiceTopologyResource,
  AzureDeploymentManager
} from "@azure/arm-deploymentmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Synchronously creates a new service topology or updates an existing service topology.
 *
 * @summary Synchronously creates a new service topology or updates an existing service topology.
 * x-ms-original-file: specification/deploymentmanager/resource-manager/Microsoft.DeploymentManager/preview/2019-11-01-preview/examples/servicetopology_createorupdate.json
 */
async function createATopologyWithArtifactSource(): Promise<void> {
  const subscriptionId = "caac1590-e859-444f-a9e0-62091c0f5929";
  const resourceGroupName = "myResourceGroup";
  const serviceTopologyName = "myTopology";
  const serviceTopologyInfo: ServiceTopologyResource = {
    artifactSourceId:
      "Microsoft.DeploymentManager/artifactSources/myArtifactSource",
    location: "centralus",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureDeploymentManager(credential, subscriptionId);
  const result = await client.serviceTopologies.createOrUpdate(
    resourceGroupName,
    serviceTopologyName,
    serviceTopologyInfo
  );
  console.log(result);
}

createATopologyWithArtifactSource().catch(console.error);

/**
 * This sample demonstrates how to Synchronously creates a new service topology or updates an existing service topology.
 *
 * @summary Synchronously creates a new service topology or updates an existing service topology.
 * x-ms-original-file: specification/deploymentmanager/resource-manager/Microsoft.DeploymentManager/preview/2019-11-01-preview/examples/servicetopology_createorupdate_noartifactsource.json
 */
async function createATopologyWithoutArtifactSource(): Promise<void> {
  const subscriptionId = "caac1590-e859-444f-a9e0-62091c0f5929";
  const resourceGroupName = "myResourceGroup";
  const serviceTopologyName = "myTopology";
  const serviceTopologyInfo: ServiceTopologyResource = {
    location: "centralus",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureDeploymentManager(credential, subscriptionId);
  const result = await client.serviceTopologies.createOrUpdate(
    resourceGroupName,
    serviceTopologyName,
    serviceTopologyInfo
  );
  console.log(result);
}

createATopologyWithoutArtifactSource().catch(console.error);
