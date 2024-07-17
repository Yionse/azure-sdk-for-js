// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Perform message thread operations using the ChatThreadClient.
 * 
 * @datasource Communication Service
 */

const { ChatClient } = require("@azure/communication-chat");
const {
  AzureCommunicationTokenCredential,
  parseConnectionString
} = require("@azure/communication-common");
const { CommunicationIdentityClient } = require("@azure/communication-identity");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const connectionString =
    process.env["COMMUNICATION_CONNECTION_STRING"] ||
    "endpoint=https://<resource-name>.communication.azure.com/;<access-key>";
  const endpoint = parseConnectionString(connectionString).endpoint;

  const identityClient = new CommunicationIdentityClient(connectionString);
  const user = await identityClient.createUser();
  const userToken = await identityClient.getToken(user, ["chat"]);
  const userSue = await identityClient.createUserAndToken(["chat"]);
  const chatClient = new ChatClient(
    endpoint,
    new AzureCommunicationTokenCredential(userToken.token)
  );
  const createChatThreadRequest = {
  topic: "Hello, World!"
};
const createChatThreadOptions = {
  participants: [
    {
      id: { communicationUserId: 'aaa12' },
      displayName: '12312asda'
    }
  ]
};
const createChatThreadResult = await chatClient.createChatThread(
  createChatThreadRequest,
  createChatThreadOptions
);
const threadId = createChatThreadResult.chatThread.id;
}

main().catch((error) => {
  console.error("Encountered an error in message operations: ", error);
  process.exit(1);
});
