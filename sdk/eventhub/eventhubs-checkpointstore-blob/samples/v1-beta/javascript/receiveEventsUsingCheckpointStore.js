// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates how to use the EventHubConsumerClient to process events from all partitions
 * of a consumer group in an Event Hubs instance, as well as checkpointing along the way.
 *
 * Checkpointing using a durable store allows your application to be more resilient. When you restart
 * your application after a crash (or an intentional stop), your application can continue consuming
 * events from where it last checkpointed.
 * 
 * @description: 需要创建两个资源，分别是storage account和event hubs。且需要在storage account中创建一个container。此外需要更换验证方式，使用sas进行，使用原有的好像会报错。
 */

const { DefaultAzureCredential, AzureCliCredential } = require("@azure/identity");
const { EventHubConsumerClient } = require("@azure/event-hubs");
const { BlobCheckpointStore } = require("@azure/eventhubs-checkpointstore-blob");
const { ContainerClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
require("dotenv/config");

const storageAccountConnectionString = "Access keys";
const containerName = "container-name";
const eventHubConnectionString = "EventHubsList->Shared access policies";
const consumerGroup = "Consumer groups";
const eventHubName = "name";

async function main() {
  const blobContainerClient = new ContainerClient(storageAccountConnectionString, containerName);

  if (!(await blobContainerClient.exists())) {
    await blobContainerClient.create();
  }

  const checkpointStore = new BlobCheckpointStore(blobContainerClient);
  const consumerClient = new EventHubConsumerClient(
    consumerGroup,
    eventHubConnectionString,
    eventHubName,
    checkpointStore
  );

  const subscription = consumerClient.subscribe({
    processEvents: async (events, context) => {
      // event processing code goes here
      if (events.length === 0) {
        // If the wait time expires (configured via options in maxWaitTimeInSeconds) Event Hubs
        // will pass you an empty array.
        return;
      }

      // Checkpointing will allow your service to pick up from
      // where it left off when restarting.
      //
      // You'll want to balance how often you checkpoint with the
      // performance of your underlying checkpoint store.
      await context.updateCheckpoint(events[events.length - 1]);
    },
    processError: async (err, context) => {
      // handle any errors that occur during the course of
      // this subscription
      console.log(`Errors in subscription to partition ${context.partitionId}: ${err}`);
    }
  });

  // Wait for a few seconds to receive events before closing
  await new Promise((resolve) => setTimeout(resolve, 10 * 1000));

  await subscription.close();
  await consumerClient.close();
  console.log(`Exiting sample`);
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});

module.exports = { main };
