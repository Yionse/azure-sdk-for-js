/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Sites } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HybridNetworkManagementClient } from "../hybridNetworkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Site,
  SitesListBySubscriptionNextOptionalParams,
  SitesListBySubscriptionOptionalParams,
  SitesListBySubscriptionResponse,
  SitesListByResourceGroupNextOptionalParams,
  SitesListByResourceGroupOptionalParams,
  SitesListByResourceGroupResponse,
  SitesDeleteOptionalParams,
  SitesDeleteResponse,
  SitesGetOptionalParams,
  SitesGetResponse,
  SitesCreateOrUpdateOptionalParams,
  SitesCreateOrUpdateResponse,
  TagsObject,
  SitesUpdateTagsOptionalParams,
  SitesUpdateTagsResponse,
  SitesListBySubscriptionNextResponse,
  SitesListByResourceGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Sites operations. */
export class SitesImpl implements Sites {
  private readonly client: HybridNetworkManagementClient;

  /**
   * Initialize a new instance of the class Sites class.
   * @param client Reference to the service client
   */
  constructor(client: HybridNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all sites in the network service in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SitesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Site> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SitesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Site[]> {
    let result: SitesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SitesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Site> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all sites in the network service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Site> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Site[]> {
    let result: SitesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Site> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<SitesDeleteResponse>, SitesDeleteResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SitesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, siteName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      SitesDeleteResponse,
      OperationState<SitesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams
  ): Promise<SitesDeleteResponse> {
    const poller = await this.beginDelete(resourceGroupName, siteName, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetOptionalParams
  ): Promise<SitesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param parameters Parameters supplied to the create or update network site operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SitesCreateOrUpdateResponse>,
      SitesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SitesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, siteName, parameters, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      SitesCreateOrUpdateResponse,
      OperationState<SitesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a network site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param parameters Parameters supplied to the create or update network site operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams
  ): Promise<SitesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      siteName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a site update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The name of the network service site.
   * @param parameters Parameters supplied to update network site tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    siteName: string,
    parameters: TagsObject,
    options?: SitesUpdateTagsOptionalParams
  ): Promise<SitesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, parameters, options },
      updateTagsOperationSpec
    );
  }

  /**
   * Lists all sites in the network service in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SitesListBySubscriptionOptionalParams
  ): Promise<SitesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all sites in the network service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams
  ): Promise<SitesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SitesListBySubscriptionNextOptionalParams
  ): Promise<SitesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SitesListByResourceGroupNextOptionalParams
  ): Promise<SitesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.SitesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.SitesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.SitesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.SitesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Site
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Site
    },
    201: {
      bodyMapper: Mappers.Site
    },
    202: {
      bodyMapper: Mappers.Site
    },
    204: {
      bodyMapper: Mappers.Site
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Site
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/sites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
