// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary use `DataLakeServiceClient` to create and read file systems and files
 */

const { AzureKeyCredential } = require("@azure/core-auth");
const {
  DataLakeServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-file-datalake");
const {AzureCliCredential} = require("@azure/identity");

// Load the .env file if it exists
require("dotenv").config();

async function main() {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";
  const connectionStr = process.env.CONNECTION_STRING || "";
  const sas = process.env.SAS_TOEKN || "";

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  // const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  // ONLY AVAILABLE IN NODE.JS RUNTIME
  // If you are using the browser, you can use the InteractiveBrowserCredential provided via @azure/identity or any other feasible implementation of TokenCredential.
  // DefaultAzureCredential will first look for Azure Active Directory (AAD)
  // client secret credentials in the following environment variables:
  //
  // - AZURE_TENANT_ID: The ID of your AAD tenant
  // - AZURE_CLIENT_ID: The ID of your AAD app registration (client)
  // - AZURE_CLIENT_SECRET: The client secret for your AAD app registration
  //
  // If those environment variables aren't found and your application is deployed
  // to an Azure VM or App Service instance, the managed service identity endpoint
  // will be used as a fallback authentication source.
  // const defaultAzureCredential = new DefaultAzureCredential();

  // You can find more TokenCredential implementations in the [@azure/identity](https://www.npmjs.com/package/@azure/identity) library
  // to use client secrets, certificates, or managed identities for authentication.

  // Use AnonymousCredential when url already includes a SAS signature
  // const anonymousCredential = new AnonymousCredential();

  // List file systems

  // Use Connection Strings for authenticate.
  // const serviceClient = DataLakeServiceClient.fromConnectionString(connectionStr)

  // Use SharedKeyCredential for authenticate.
  // const serviceClient = new DataLakeServiceClient(
  //   `https://${account}.dfs.core.windows.net?${sas}`,
  //   // sharedKeyCredential
  // );

  // console.log("File Systems:");
  // let i = 1;
  // for await (const response of serviceClient
  //   .listFileSystems()
  //   .byPage({ maxPageSize: 20 })) {
  //   if (response.fileSystemItems) {
  //     for (const fileSystem of response.fileSystemItems) {
  //       console.log(`File System ${i++}: ${fileSystem.name}`);
  //     }
  //   }
  // }

  // Create a file system
  // const fileSystemName = `newfilesystem${new Date().getTime()}`;
  // const fileSystemClient = serviceClient.getFileSystemClient(fileSystemName);

  // const fileSystemResponse = await fileSystemClient.create();
  // console.log(
  //   `Created file system ${fileSystemClient.name} successfully, request ID: ${fileSystemResponse.requestId}`
  // );

  // // create and delete a directory
  // const directoryClient = fileSystemClient.getDirectoryClient("directory");
  // await directoryClient.create();
  // await directoryClient.delete();

  // // Create a file
  // const content = "hello";
  // const fileName = "newfile" + new Date().getTime();
  // const fileClient = fileSystemClient.getFileClient(fileName);
  // await fileClient.create();
  // await fileClient.append(content, 0, content.length);
  // const flushFileResponse = await fileClient.flush(content.length);
  // console.log(`Uploaded file ${fileClient.name} successfully`, flushFileResponse.requestId);

  // console.log(`Paths in ${fileSystemClient.name}:`);
  // for await (const path of fileSystemClient.listPaths()) {
  //   console.log(`- ${path.name} (isDirectory = ${path.isDirectory})`);
  // }

  // Get file content from position 0 to the end
  // In Node.js, get downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.contentAsBlob
  // const readFileResponse = await fileClient.read();

  // if (!readFileResponse.readableStreamBody) {
  //   throw new Error("Expected a readable stream body, but none was returned.");
  // }

  // const readFileContent = (await streamToBuffer(readFileResponse.readableStreamBody)).toString();

  // console.log(`Downloaded file content: ${readFileContent}`);

  // Finally, delete the example file system.
  // await fileSystemClient.delete();

  // console.log(`Deleted file system ${fileSystemClient.name}.`);

  /**
   * Note: Examples in README.
   */

  const datalakeServiceClient = DataLakeServiceClient.fromConnectionString(connectionStr);

  // create a file system
  const fileSystemName = `newfiletc1720171509779`;
  const fileSystemClient = datalakeServiceClient.getFileSystemClient('newfiletc1720171509779');
  // const createResponse = await fileSystemClient.create();
  // console.log(`Create file system ${fileSystemName} successfully`, createResponse.requestId);

  /**
   * Note: You can use 'for await...of' or 'byPage()'.
   */
  let i = 1;
  let fileSystems = datalakeServiceClient.listFileSystems();
  for await (const fileSystem of fileSystems) {
    console.log(`File system ${i++}: ${fileSystem.name}`);
  }

  // create and delete a directory
  const directoryClient = fileSystemClient.getDirectoryClient("directory");
  const createDirResponse = await directoryClient.create();
  console.log(createDirResponse);
  // console.log(`Create directory ${directoryClient.name} successfully`, createDirResponse.requestId);
  // await directoryClient.delete();


  // create a file
  const content = "Hello world!12312312312";
  const fileClient = fileSystemClient.getFileClient(fileSystemName);
  await fileClient.create();
  await fileClient.append(content, 0, content.length);
  await fileClient.flush(content.length);
  console.log(`Create and upload file ${fileSystemName} successfully`);

  // List paths inside a file system
  i = 1;
  let paths = fileSystemClient.listPaths();
  for await (const path of paths) {
    console.log(`Path ${i++}: ${path.name}, is directory: ${path.isDirectory}`);
  }

  // Downloaded file
  // Get file content from position 0 to the end
  // In Node.js, get downloaded data by accessing downloadResponse.readableStreamBody
  const downloadResponse = await fileClient.read();
  const downloaded = await streamToBuffer(downloadResponse.readableStreamBody);
  console.log("Downloaded file content:", downloaded.toString());

}

// A helper method used to read a Node.js readable stream into a Buffer
async function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on("error", reject);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

module.exports = { main };
