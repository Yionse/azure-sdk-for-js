/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Workspace,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesListBySubscriptionOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesDeleteOptionalParams,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspaceUpdate,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Gets all the workspaces within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets all the workspaces within a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: WorkspacesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams
  ): Promise<WorkspacesGetResponse>;
  /**
   * Deletes the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates a new workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters Parameters supplied to the create or update a workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesCreateOrUpdateResponse>,
      WorkspacesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters Parameters supplied to the create or update a workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Updates a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters The update to the workspace.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    parameters: WorkspaceUpdate,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesUpdateResponse>,
      WorkspacesUpdateResponse
    >
  >;
  /**
   * Updates a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters The update to the workspace.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    parameters: WorkspaceUpdate,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<WorkspacesUpdateResponse>;
}
