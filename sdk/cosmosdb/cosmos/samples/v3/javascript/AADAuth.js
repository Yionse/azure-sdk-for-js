// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Uses AAD credentials to authenticate with the CosmosClient.
 */

require("dotenv").config();

const { UsernamePasswordCredential, AzureCliCredential } = require("@azure/identity");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { CosmosClient, PartitionKeyDefinitionVersion, PartitionKeyKind } = require("@azure/cosmos");
const { handleError, finish, logStep } = require("./Shared/handleError");

const key = process.env.COSMOS_KEY || "<cosmos key>";
const endpoint = process.env.COSMOS_ENDPOINT || "<cosmos endpoint>";
const existingContainerId = process.env.COSMOS_CONTAINER || "<cosmos container>";
const databaseSrc = process.env.COSMOS_DATABASE || "<cosmos container>";

async function run() {
  const client = new CosmosClient({ endpoint, key });
  const { database } = await client.databases.createIfNotExists({ id: databaseSrc });
  const { container } = await database.containers.createIfNotExists({ id: existingContainerId });
  await container.item("id", "1").read();        // string type
  await container.item("id", 2).read();          // number type
  await container.item("id", true).read();       // boolean type
  await container.item("id", {}).read();         // None type
  await container.item("id", undefined).read();  // None type
  await container.item("id", null).read();       // null type
  const cities = [
    { id: `1+${+new Date()}`, name: "Olympia", state: "WA", isCapitol: true },
    { id: `2+${+new Date()}`, name: "Redmond", state: "WA", isCapitol: false },
    { id: `3+${+new Date()}`, name: "Chicago", state: "IL", isCapitol: false }
  ];
  for (const city of cities) {
    await container.items.create(city);
  }
  
  const res = await container.item("1", "1").read();
const { resources } = await container.items
  .query("SELECT * from c WHERE c.isCapitol = true")
  .fetchAll();
for (const city of resources) {
  console.log(`${city.name}, ${city.state} is a capitol `);
}
}

run().catch(handleError);
