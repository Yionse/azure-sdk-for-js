// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Deletes the blobs associated with a given manifest from the repository.
 */

const {
  ContainerRegistryContentClient,
  KnownManifestMediaType,
} = require("@azure/container-registry");
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

  const downloadResult = await client.getManifest("v1");
  if (downloadResult.mediaType !== KnownManifestMediaType.OciImageManifest) {
    throw new Error("Expected an OCI image manifest");
  }

  for (const layer of downloadResult.manifest.layers) {
    await client.deleteBlob(layer.digest);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
