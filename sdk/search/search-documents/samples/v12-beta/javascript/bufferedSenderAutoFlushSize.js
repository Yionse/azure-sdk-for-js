// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Test Must:
 * 1、Key must set type of `Both`
 * 2、Create an OpenAI resource before use, and then create a new deployment
 * 3、Create an CosmosDB
 * 4、Create datasource from portal
 */

/**
 * @summary Demonstrates the SearchIndexingBufferedSender with Autoflush based on size.
 */

const { DefaultAzureCredential, AzureCliCredential } = require("@azure/identity");
const {
  GeographyPoint,
  SearchClient,
  SearchIndexClient,
  SearchIndexingBufferedSender,
  AzureKeyCredential,
  odata
} = require("@azure/search-documents");
const { createIndex, delay, documentKeyRetriever, WAIT_TIME } = require("./setup");

require("dotenv").config();

/**
 * This sample is to demonstrate the use of SearchIndexingBufferedSender.
 * In this sample, the autoFlush is set to true. i.e. the user does not
 * want to call the flush manually. The upload action happen automatically
 * when the size of the batch is greater than threshold (which is set to 1000)
 * by default.
 */
const endpoint = process.env.ENDPOINT || "";
const indexName = "example-index";
const key = process.env.KEY || "";
// const TEST_INDEX_NAME = "sample-readme-index-date--" + +new Date();

// const client = new SearchIndexClient(endpoint, new AzureKeyCredential(key));
const client = new SearchClient(endpoint, indexName, new AzureKeyCredential(key));

async function main() {
  const result = await client.getDocument("1234");
  console.log(result);
}

main();
