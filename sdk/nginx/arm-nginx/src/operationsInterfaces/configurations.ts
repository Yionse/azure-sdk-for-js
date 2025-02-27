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
  NginxConfigurationResponse,
  ConfigurationsListOptionalParams,
  ConfigurationsGetOptionalParams,
  ConfigurationsGetResponse,
  ConfigurationsCreateOrUpdateOptionalParams,
  ConfigurationsCreateOrUpdateResponse,
  ConfigurationsDeleteOptionalParams,
  ConfigurationsAnalysisOptionalParams,
  ConfigurationsAnalysisResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Configurations. */
export interface Configurations {
  /**
   * List the NGINX configuration of given NGINX deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    deploymentName: string,
    options?: ConfigurationsListOptionalParams,
  ): PagedAsyncIterableIterator<NginxConfigurationResponse>;
  /**
   * Get the NGINX configuration of given NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of NGINX conf
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsGetOptionalParams,
  ): Promise<ConfigurationsGetResponse>;
  /**
   * Create or update the NGINX configuration for given NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of NGINX conf
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationsCreateOrUpdateResponse>,
      ConfigurationsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the NGINX configuration for given NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of NGINX conf
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<ConfigurationsCreateOrUpdateResponse>;
  /**
   * Reset the NGINX configuration of given NGINX deployment to default
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of NGINX conf
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Reset the NGINX configuration of given NGINX deployment to default
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of NGINX conf
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Analyze an NGINX configuration without applying it to the NGINXaaS deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of NGINX conf
   * @param options The options parameters.
   */
  analysis(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsAnalysisOptionalParams,
  ): Promise<ConfigurationsAnalysisResponse>;
}
