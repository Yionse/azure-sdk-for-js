// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary This sample demonstrates how to get the Document status for a given document of a batch translation operation
 */

import * as dotenv from "dotenv";
import createClient from "@azure-rest/ai-translation-document";
import {
  ONE_TEST_DOCUMENTS,
  createSourceContainer,
  createTargetContainer,
  StartTranslationAndWait
} from "../../../../test/public/utils/samplesHelper";
import {
  createSourceInput,
  createTargetInput,
  createBatchRequest,
  getTranslationOperationID,
} from "../../../../test/public/utils/testHelper";
import { isUnexpected } from "../../../../src/isUnexpected";
dotenv.config();

const endpoint =
  process.env["ENDPOINT"] ||
  "https://<translator-instance>-doctranslation.cognitiveservices.azure.com";
const apiKey = process.env["DOCUMENT_TRANSLATION_API_KEY"] || "<API_Key>";
const credentials = { key: apiKey ?? "" };

export async function main() {
  console.log("== Get Document Status ==");
  const client = createClient(endpoint, credentials);

  const sourceUrl = await createSourceContainer(ONE_TEST_DOCUMENTS);
  const sourceInput = createSourceInput(sourceUrl);
  const targetUrl = await createTargetContainer();
  const targetInput = createTargetInput(targetUrl, "fr");
  const batchRequest = createBatchRequest(sourceInput, [targetInput]);

  //Start translation
  const batchRequests = { inputs: [batchRequest] };
  const response = await StartTranslationAndWait(client, batchRequests);
  const operationLocationUrl = response.headers["operation-location"];
  const operationId = getTranslationOperationID(operationLocationUrl);

  //get Documents Status
  const documentResponse = await client.path("/document/batches/{id}/documents", operationId).get();
  if (isUnexpected(documentResponse)) {
    throw documentResponse.body;
  }

  const responseBody = documentResponse.body;
  for (const document of responseBody.value) {
    //get document status
    const documentStatus = await client
      .path("/document/batches/{id}/documents/{documentId}", operationId, document.id)
      .get();
    if (isUnexpected(documentStatus)) {
      throw documentStatus.body;
    }
    console.log("Document Status = " + documentStatus.status);
    const documentStatusOutput = documentStatus.body;
    console.log("Document ID = " + documentStatusOutput.id);
    console.log("Document source path = " + documentStatusOutput.sourcePath);
    console.log("Document path = " + documentStatusOutput.path);
    console.log("Target language = " + documentStatusOutput.to);
    console.log("Document created dateTime = " + documentStatusOutput.createdDateTimeUtc);
    console.log("Document last action date time = " + documentStatusOutput.lastActionDateTimeUtc);
  }

  
}main().catch((err) => {
    console.error(err);
  });
