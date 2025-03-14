/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { ApplyUpdates } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MaintenanceManagementClient } from "../maintenanceManagementClient.js";
import {
  ApplyUpdate,
  ApplyUpdatesListOptionalParams,
  ApplyUpdatesListResponse,
  ApplyUpdatesGetParentOptionalParams,
  ApplyUpdatesGetParentResponse,
  ApplyUpdatesGetOptionalParams,
  ApplyUpdatesGetResponse,
  ApplyUpdatesCreateOrUpdateOrCancelOptionalParams,
  ApplyUpdatesCreateOrUpdateOrCancelResponse,
  ApplyUpdatesCreateOrUpdateParentOptionalParams,
  ApplyUpdatesCreateOrUpdateParentResponse,
  ApplyUpdatesCreateOrUpdateOptionalParams,
  ApplyUpdatesCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplyUpdates operations. */
export class ApplyUpdatesImpl implements ApplyUpdates {
  private readonly client: MaintenanceManagementClient;

  /**
   * Initialize a new instance of the class ApplyUpdates class.
   * @param client Reference to the service client
   */
  constructor(client: MaintenanceManagementClient) {
    this.client = client;
  }

  /**
   * Get Configuration records within a subscription
   * @param options The options parameters.
   */
  public list(
    options?: ApplyUpdatesListOptionalParams,
  ): PagedAsyncIterableIterator<ApplyUpdate> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: ApplyUpdatesListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ApplyUpdate[]> {
    let result: ApplyUpdatesListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: ApplyUpdatesListOptionalParams,
  ): AsyncIterableIterator<ApplyUpdate> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Track maintenance updates to resource with parent
   * @param resourceGroupName Resource group name
   * @param providerName Resource provider name
   * @param resourceParentType Resource parent type
   * @param resourceParentName Resource parent identifier
   * @param resourceType Resource type
   * @param resourceName Resource identifier
   * @param applyUpdateName applyUpdate Id
   * @param options The options parameters.
   */
  getParent(
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    applyUpdateName: string,
    options?: ApplyUpdatesGetParentOptionalParams,
  ): Promise<ApplyUpdatesGetParentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        applyUpdateName,
        options,
      },
      getParentOperationSpec,
    );
  }

  /**
   * Track maintenance updates to resource
   * @param resourceGroupName Resource group name
   * @param providerName Resource provider name
   * @param resourceType Resource type
   * @param resourceName Resource identifier
   * @param applyUpdateName applyUpdate Id
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    applyUpdateName: string,
    options?: ApplyUpdatesGetOptionalParams,
  ): Promise<ApplyUpdatesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        applyUpdateName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Apply maintenance updates to resource
   * @param resourceGroupName Resource group name
   * @param providerName Resource provider name
   * @param resourceType Resource type
   * @param resourceName Resource identifier
   * @param applyUpdateName ApplyUpdate name
   * @param applyUpdate The ApplyUpdate
   * @param options The options parameters.
   */
  createOrUpdateOrCancel(
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    applyUpdateName: string,
    applyUpdate: ApplyUpdate,
    options?: ApplyUpdatesCreateOrUpdateOrCancelOptionalParams,
  ): Promise<ApplyUpdatesCreateOrUpdateOrCancelResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        applyUpdateName,
        applyUpdate,
        options,
      },
      createOrUpdateOrCancelOperationSpec,
    );
  }

  /**
   * Apply maintenance updates to resource with parent
   * @param resourceGroupName Resource group name
   * @param providerName Resource provider name
   * @param resourceParentType Resource parent type
   * @param resourceParentName Resource parent identifier
   * @param resourceType Resource type
   * @param resourceName Resource identifier
   * @param options The options parameters.
   */
  createOrUpdateParent(
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    options?: ApplyUpdatesCreateOrUpdateParentOptionalParams,
  ): Promise<ApplyUpdatesCreateOrUpdateParentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        options,
      },
      createOrUpdateParentOperationSpec,
    );
  }

  /**
   * Apply maintenance updates to resource
   * @param resourceGroupName Resource group name
   * @param providerName Resource provider name
   * @param resourceType Resource type
   * @param resourceName Resource identifier
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    options?: ApplyUpdatesCreateOrUpdateOptionalParams,
  ): Promise<ApplyUpdatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, providerName, resourceType, resourceName, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Get Configuration records within a subscription
   * @param options The options parameters.
   */
  private _list(
    options?: ApplyUpdatesListOptionalParams,
  ): Promise<ApplyUpdatesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getParentOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    default: {
      bodyMapper: Mappers.MaintenanceError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.providerName,
    Parameters.resourceParentType,
    Parameters.resourceParentName,
    Parameters.applyUpdateName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    default: {
      bodyMapper: Mappers.MaintenanceError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.providerName,
    Parameters.applyUpdateName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOrCancelOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    201: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    default: {
      bodyMapper: Mappers.MaintenanceError,
    },
  },
  requestBody: Parameters.applyUpdate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.providerName,
    Parameters.applyUpdateName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createOrUpdateParentOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    201: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    default: {
      bodyMapper: Mappers.MaintenanceError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.providerName,
    Parameters.resourceParentType,
    Parameters.resourceParentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    201: {
      bodyMapper: Mappers.ApplyUpdate,
    },
    default: {
      bodyMapper: Mappers.MaintenanceError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.resourceGroupName1,
    Parameters.providerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/applyUpdates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListApplyUpdate,
    },
    default: {
      bodyMapper: Mappers.MaintenanceError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
