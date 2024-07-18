// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Publish and Receive events to Event Grid.
 */

const { EventGridSenderClient } = require("@azure/eventgrid-namespaces");
const { AzureKeyCredential } = require("@azure/core-auth");

const dotenv = require("dotenv");

// Load the .env file if it exists
dotenv.config();

const endpoint = process.env["EVENT_GRID_NAMESPACES_ENDPOINT"] ?? "https://endpoint";
const key = process.env["EVENT_GRID_NAMESPACES_KEY"] ?? "api_key";
const eventSubscripionName = process.env["EVENT_SUBSCRIPTION_NAME"] ?? "testsubscription1";
const topicName = process.env["TOPIC_NAME"] ?? "testtopic1";
async function main() {
  const client = new EventGridSenderClient(
  endpoint,
  new AzureKeyCredential(key),
  topicName
);
const cloudEvent = {
  type: "example",
  source: "https://example.com",
  id: `singleEventIdV210001`,
  time: new Date(),
  data: {
    resourceUri: "https://dummyurl.com",
  },
  specversion: "1.0",
};
// Publish the Cloud Event
await client.sendEvents(cloudEvent);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
