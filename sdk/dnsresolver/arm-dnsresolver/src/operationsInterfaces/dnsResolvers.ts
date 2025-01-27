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
  DnsResolver,
  DnsResolversListByResourceGroupOptionalParams,
  DnsResolversListOptionalParams,
  SubResource,
  DnsResolversListByVirtualNetworkOptionalParams,
  DnsResolversCreateOrUpdateOptionalParams,
  DnsResolversCreateOrUpdateResponse,
  DnsResolverPatch,
  DnsResolversUpdateOptionalParams,
  DnsResolversUpdateResponse,
  DnsResolversDeleteOptionalParams,
  DnsResolversGetOptionalParams,
  DnsResolversGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DnsResolvers. */
export interface DnsResolvers {
  /**
   * Lists DNS resolvers within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DnsResolversListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<DnsResolver>;
  /**
   * Lists DNS resolvers in all resource groups of a subscription.
   * @param options The options parameters.
   */
  list(
    options?: DnsResolversListOptionalParams,
  ): PagedAsyncIterableIterator<DnsResolver>;
  /**
   * Lists DNS resolver resource IDs linked to a virtual network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  listByVirtualNetwork(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: DnsResolversListByVirtualNetworkOptionalParams,
  ): PagedAsyncIterableIterator<SubResource>;
  /**
   * Creates or updates a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    dnsResolverName: string,
    parameters: DnsResolver,
    options?: DnsResolversCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DnsResolversCreateOrUpdateResponse>,
      DnsResolversCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    parameters: DnsResolver,
    options?: DnsResolversCreateOrUpdateOptionalParams,
  ): Promise<DnsResolversCreateOrUpdateResponse>;
  /**
   * Updates a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    dnsResolverName: string,
    parameters: DnsResolverPatch,
    options?: DnsResolversUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DnsResolversUpdateResponse>,
      DnsResolversUpdateResponse
    >
  >;
  /**
   * Updates a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    parameters: DnsResolverPatch,
    options?: DnsResolversUpdateOptionalParams,
  ): Promise<DnsResolversUpdateResponse>;
  /**
   * Deletes a DNS resolver. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: DnsResolversDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a DNS resolver. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: DnsResolversDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets properties of a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: DnsResolversGetOptionalParams,
  ): Promise<DnsResolversGetResponse>;
}
