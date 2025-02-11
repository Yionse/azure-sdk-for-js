/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { LabPlans } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { LabServicesClient } from "../labServicesClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  LabPlan,
  LabPlansListBySubscriptionNextOptionalParams,
  LabPlansListBySubscriptionOptionalParams,
  LabPlansListBySubscriptionResponse,
  LabPlansListByResourceGroupNextOptionalParams,
  LabPlansListByResourceGroupOptionalParams,
  LabPlansListByResourceGroupResponse,
  LabPlansGetOptionalParams,
  LabPlansGetResponse,
  LabPlansCreateOrUpdateOptionalParams,
  LabPlansCreateOrUpdateResponse,
  LabPlanUpdate,
  LabPlansUpdateOptionalParams,
  LabPlansUpdateResponse,
  LabPlansDeleteOptionalParams,
  SaveImageBody,
  LabPlansSaveImageOptionalParams,
  LabPlansListBySubscriptionNextResponse,
  LabPlansListByResourceGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing LabPlans operations. */
export class LabPlansImpl implements LabPlans {
  private readonly client: LabServicesClient;

  /**
   * Initialize a new instance of the class LabPlans class.
   * @param client Reference to the service client
   */
  constructor(client: LabServicesClient) {
    this.client = client;
  }

  /**
   * Returns a list of all lab plans within a subscription
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: LabPlansListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<LabPlan> {
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
    options?: LabPlansListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LabPlan[]> {
    let result: LabPlansListBySubscriptionResponse;
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
    options?: LabPlansListBySubscriptionOptionalParams
  ): AsyncIterableIterator<LabPlan> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns a list of all lab plans for a subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: LabPlansListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<LabPlan> {
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
    options?: LabPlansListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LabPlan[]> {
    let result: LabPlansListByResourceGroupResponse;
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
    options?: LabPlansListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LabPlan> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of all lab plans within a subscription
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: LabPlansListBySubscriptionOptionalParams
  ): Promise<LabPlansListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Returns a list of all lab plans for a subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: LabPlansListByResourceGroupOptionalParams
  ): Promise<LabPlansListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieves the properties of a Lab Plan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labPlanName: string,
    options?: LabPlansGetOptionalParams
  ): Promise<LabPlansGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labPlanName, options },
      getOperationSpec
    );
  }

  /**
   * Operation to create or update a Lab Plan resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param body The request body.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    labPlanName: string,
    body: LabPlan,
    options?: LabPlansCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LabPlansCreateOrUpdateResponse>,
      LabPlansCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LabPlansCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labPlanName, body, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "original-uri"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to create or update a Lab Plan resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param body The request body.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labPlanName: string,
    body: LabPlan,
    options?: LabPlansCreateOrUpdateOptionalParams
  ): Promise<LabPlansCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      labPlanName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to update a Lab Plan resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param body The request body.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    labPlanName: string,
    body: LabPlanUpdate,
    options?: LabPlansUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LabPlansUpdateResponse>,
      LabPlansUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LabPlansUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labPlanName, body, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to update a Lab Plan resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param body The request body.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    labPlanName: string,
    body: LabPlanUpdate,
    options?: LabPlansUpdateOptionalParams
  ): Promise<LabPlansUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      labPlanName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to delete a Lab Plan resource. Deleting a lab plan does not delete labs associated with a
   * lab plan, nor does it delete shared images added to a gallery via the lab plan permission container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    labPlanName: string,
    options?: LabPlansDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labPlanName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to delete a Lab Plan resource. Deleting a lab plan does not delete labs associated with a
   * lab plan, nor does it delete shared images added to a gallery via the lab plan permission container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    labPlanName: string,
    options?: LabPlansDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      labPlanName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Saves an image from a lab VM to the attached shared image gallery.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param body The request body.
   * @param options The options parameters.
   */
  async beginSaveImage(
    resourceGroupName: string,
    labPlanName: string,
    body: SaveImageBody,
    options?: LabPlansSaveImageOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labPlanName, body, options },
      saveImageOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Saves an image from a lab VM to the attached shared image gallery.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labPlanName The name of the lab plan that uniquely identifies it within containing resource
   *                    group. Used in resource URIs and in UI.
   * @param body The request body.
   * @param options The options parameters.
   */
  async beginSaveImageAndWait(
    resourceGroupName: string,
    labPlanName: string,
    body: SaveImageBody,
    options?: LabPlansSaveImageOptionalParams
  ): Promise<void> {
    const poller = await this.beginSaveImage(
      resourceGroupName,
      labPlanName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: LabPlansListBySubscriptionNextOptionalParams
  ): Promise<LabPlansListBySubscriptionNextResponse> {
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
    options?: LabPlansListByResourceGroupNextOptionalParams
  ): Promise<LabPlansListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/labPlans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedLabPlans
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedLabPlans
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabPlan
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labPlanName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LabPlan
    },
    201: {
      bodyMapper: Mappers.LabPlan
    },
    202: {
      bodyMapper: Mappers.LabPlan
    },
    204: {
      bodyMapper: Mappers.LabPlan
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labPlanName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LabPlan
    },
    201: {
      bodyMapper: Mappers.LabPlan
    },
    202: {
      bodyMapper: Mappers.LabPlan
    },
    204: {
      bodyMapper: Mappers.LabPlan
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labPlanName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labPlanName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const saveImageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}/saveImage",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labPlanName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedLabPlans
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
      bodyMapper: Mappers.PagedLabPlans
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
