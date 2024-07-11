// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Deletes a given manifest from the repository.
 */

const { ContainerRegistryContentClient } = require("@azure/container-registry");
const { DefaultAzureCredential, AzureCliCredential } = require("@azure/identity");
require("dotenv").config();

async function main() {
  // Get the service endpoint from the environment
  const endpoint = process.env.CONTAINER_REGISTRY_ENDPOINT || "<endpoint>";
  const repository = process.env.CONTAINER_REGISTRY_REPOSITORY || "library/hello-world";
  // Create a new ContainerRegistryClient
  const client = new ContainerRegistryContentClient(
    endpoint,
    repository,
    new AzureCliCredential()
  );

  const downloadResult = await client.getManifest("demo");
  await client.deleteManifest(downloadResult.digest);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
