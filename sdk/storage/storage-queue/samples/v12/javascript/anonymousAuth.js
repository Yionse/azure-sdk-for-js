// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary authenticate anonymously using a SAS-encoded URL
 */

const { QueueServiceClient, AnonymousCredential } = require("@azure/storage-queue");
const { AzureCliCredential } = require("@azure/identity");
// Load the .env file if it exists
require("dotenv").config();

async function main() {
  // Enter your storage account name and SAS
  const account = process.env.ACCOUNT_NAME || "";
  const accountSas = process.env.ACCOUNT_SAS || "";
  const credential = new AzureCliCredential();
  const queueServiceClient = new QueueServiceClient(
    `https://${account}.queue.core.windows.net`,
    credential
  );
  const queueName = `newqueue1720426587084`;
  const queueClient = queueServiceClient.getQueueClient(queueName);
   const response = await queueClient.receiveMessages();
  if (response.receivedMessageItems.length == 1) {
    const receivedMessageItem = response.receivedMessageItems[0];
    console.log(`Processing & deleting message with content: ${receivedMessageItem.messageText}`);
    const deleteMessageResponse = await queueClient.deleteMessage(
      receivedMessageItem.messageId,
      receivedMessageItem.popReceipt
    );
    console.log(
      `Delete message successfully, service assigned request Id: ${deleteMessageResponse.requestId}`
    );
  }

}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

module.exports = { main };
