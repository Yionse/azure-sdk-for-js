/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ProjectEnvironmentTypes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DevCenterClient } from "../devCenterClient.js";
import {
  ProjectEnvironmentType,
  ProjectEnvironmentTypesListNextOptionalParams,
  ProjectEnvironmentTypesListOptionalParams,
  ProjectEnvironmentTypesListResponse,
  ProjectEnvironmentTypesGetOptionalParams,
  ProjectEnvironmentTypesGetResponse,
  ProjectEnvironmentTypesCreateOrUpdateOptionalParams,
  ProjectEnvironmentTypesCreateOrUpdateResponse,
  ProjectEnvironmentTypeUpdate,
  ProjectEnvironmentTypesUpdateOptionalParams,
  ProjectEnvironmentTypesUpdateResponse,
  ProjectEnvironmentTypesDeleteOptionalParams,
  ProjectEnvironmentTypesListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProjectEnvironmentTypes operations. */
export class ProjectEnvironmentTypesImpl implements ProjectEnvironmentTypes {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class ProjectEnvironmentTypes class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists environment types for a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectEnvironmentTypesListOptionalParams,
  ): PagedAsyncIterableIterator<ProjectEnvironmentType> {
    const iter = this.listPagingAll(resourceGroupName, projectName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectEnvironmentTypesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ProjectEnvironmentType[]> {
    let result: ProjectEnvironmentTypesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, projectName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectEnvironmentTypesListOptionalParams,
  ): AsyncIterableIterator<ProjectEnvironmentType> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      projectName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists environment types for a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectEnvironmentTypesListOptionalParams,
  ): Promise<ProjectEnvironmentTypesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets a project environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param environmentTypeName The name of the environment type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    environmentTypeName: string,
    options?: ProjectEnvironmentTypesGetOptionalParams,
  ): Promise<ProjectEnvironmentTypesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, environmentTypeName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a project environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param environmentTypeName The name of the environment type.
   * @param body Represents a Project Environment Type.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    projectName: string,
    environmentTypeName: string,
    body: ProjectEnvironmentType,
    options?: ProjectEnvironmentTypesCreateOrUpdateOptionalParams,
  ): Promise<ProjectEnvironmentTypesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, environmentTypeName, body, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Partially updates a project environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param environmentTypeName The name of the environment type.
   * @param body Updatable project environment type properties.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    projectName: string,
    environmentTypeName: string,
    body: ProjectEnvironmentTypeUpdate,
    options?: ProjectEnvironmentTypesUpdateOptionalParams,
  ): Promise<ProjectEnvironmentTypesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, environmentTypeName, body, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes a project environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param environmentTypeName The name of the environment type.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    environmentTypeName: string,
    options?: ProjectEnvironmentTypesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, environmentTypeName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: ProjectEnvironmentTypesListNextOptionalParams,
  ): Promise<ProjectEnvironmentTypesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectEnvironmentTypeListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectEnvironmentType,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.environmentTypeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectEnvironmentType,
    },
    201: {
      bodyMapper: Mappers.ProjectEnvironmentType,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.environmentTypeName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectEnvironmentType,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.environmentTypeName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.environmentTypeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectEnvironmentTypeListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
