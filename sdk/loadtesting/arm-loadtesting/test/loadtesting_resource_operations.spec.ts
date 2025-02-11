/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { RecorderStartOptions } from "@azure-tools/test-recorder";
import { env, Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { LoadTestClient } from "../src/loadTestClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import type { LoadTestResource, LoadTestResourcePatchRequestBody } from "../src/models/index.js";
import { describe, it, assert, beforeEach, afterEach, beforeAll } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "00000000-0000-0000-0000-000000000000",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Load Testing Resource Operations", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: LoadTestClient;
  let location: string;
  let resourceGroupName: string;
  let loadTestResourceName: string;
  let loadTestResourceCreatePayload: LoadTestResource;
  let loadTestResourcePatchPayload: LoadTestResourcePatchRequestBody;

  beforeAll(() => {
    // Load test resource create payload
    loadTestResourceCreatePayload = {
      description: "New Load test resource from SDK.",
      location: "westus2",
      tags: { team: "Azure Load Testing SDK" },
    };

    // Load test resource patch payload
    loadTestResourcePatchPayload = {
      identity: {
        type: "SystemAssigned",
      },
    };

    // Set the global variables to be used in the tests
    location = env.LOCATION || "westus2";
    resourceGroupName = env.RESOURCE_GROUP || "myjstest";
    loadTestResourceName = "loadtestsResource";
  });

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "00000000-0000-0000-0000-000000000000";
    const credential = createTestCredential();
    client = new LoadTestClient(credential, subscriptionId, recorder.configureClientOptions({}));
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("create resource", async () => {
    // Create a load test resource
    const resource = await client.loadTests.beginCreateOrUpdateAndWait(
      resourceGroupName,
      loadTestResourceName,
      loadTestResourceCreatePayload,
      testPollingOptions,
    );

    // Verify the response
    assert.equal(resource.provisioningState, "Succeeded");
    assert.equal(resource.name, loadTestResourceName);
    assert.equal(resource.location, location);
    assert.equal(resource.tags?.team, loadTestResourceCreatePayload.tags?.team);
    assert.equal(resource.description, loadTestResourceCreatePayload.description);
    assert.equal(resource.identity?.type, "None");
  });

  it("get resource", async () => {
    // Get the load test resource
    const resource = await client.loadTests.get(resourceGroupName, loadTestResourceName);

    // Verify the response
    assert.equal(resource.provisioningState, "Succeeded");
    assert.equal(resource.name, loadTestResourceName);
    assert.equal(resource.location, location);
    assert.equal(resource.tags?.team, loadTestResourceCreatePayload.tags?.team);
    assert.equal(resource.description, loadTestResourceCreatePayload.description);
    assert.equal(resource.identity?.type, "None");
  });

  it("patch resource", async () => {
    // Patch the load test resource
    const result = await client.loadTests.beginUpdateAndWait(
      resourceGroupName,
      loadTestResourceName,
      loadTestResourcePatchPayload,
      testPollingOptions,
    );

    // // Get the load test resource
    // const patchedResource = await client.loadTests.get(
    //   resourceGroupName,
    //   loadTestResourceName
    // );

    // Verify the response
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.name, loadTestResourceName);
    assert.equal(result.location, location);
    assert.equal(result.tags?.team, loadTestResourceCreatePayload.tags?.team);
    assert.equal(result.description, loadTestResourceCreatePayload.description);
    assert.equal(result.identity?.type, loadTestResourcePatchPayload.identity?.type);
  });

  it("delete resource", async () => {
    // Delete the load test resource
  });
});
