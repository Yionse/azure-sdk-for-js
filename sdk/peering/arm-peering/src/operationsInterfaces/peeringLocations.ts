/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PeeringLocation,
  PeeringLocationsKind,
  PeeringLocationsListOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PeeringLocations. */
export interface PeeringLocations {
  /**
   * Lists all of the available peering locations for the specified kind of peering.
   * @param kind The kind of the peering.
   * @param options The options parameters.
   */
  list(
    kind: PeeringLocationsKind,
    options?: PeeringLocationsListOptionalParams
  ): PagedAsyncIterableIterator<PeeringLocation>;
}
