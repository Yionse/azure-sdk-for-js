// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This sample demonstrates how the peekMessages() function can be used to browse a Service Bus message.
 *
 * See https://docs.microsoft.com/azure/service-bus-messaging/message-browsing to learn about message browsing.
 *
 * Setup: Please run "sendMessages.ts" sample before running this to populate the queue/topic
 *
 * @summary Demonstrates how to browse a Service Bus message
 * datasourceName: Service Bus
 * description: 需要启用enable属性，否则sessions.js无法通过
 */

const { ServiceBusClient } = require("@azure/service-bus");
const {AzureCliCredential, DefaultAzureCredential} = require("@azure/identity");

// Load the .env file if it exists
require("dotenv").config();

// Define connection string and related Service Bus entity names here
const connectionString = process.env.SERVICEBUS_CONNECTION_STRING || "<connection string>";
const queueName = process.env.QUEUE_NAME || "<queue name>";

const fullyQualifiedNamespace = "servicebustc.servicebus.windows.net";
const credential = new DefaultAzureCredential();
const serviceBusClient = new ServiceBusClient(process.env.SERVICEBUS_CONNECTION_STRING);

async function main() {
  const sender = serviceBusClient.createSender(queueName);
  const receiver = serviceBusClient.createReceiver(queueName);
  const myMessages = await receiver.receiveMessages(10);
  const deadLetterReceiverForQueue = serviceBusClient.createReceiver(queueName, {
    subQueueType: "deadLetter"
  });


// Dead letter receivers work like any other receiver connected to a queue
// ex:
const messages = await deadLetterReceiverForQueue.receiveMessages(5);

for (const message of messages) {
  console.log(`Dead lettered message: ${message.body}`);
}
}

main().catch((err) => {
  console.log("BrowseMessages Sample - Error occurred: ", err);
  process.exit(1);
});

module.exports = { main };
