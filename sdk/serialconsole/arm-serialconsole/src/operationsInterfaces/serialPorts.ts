/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SerialPortsListOptionalParams,
  SerialPortsListResponse,
  SerialPortsGetOptionalParams,
  SerialPortsGetResponse,
  SerialPort,
  SerialPortsCreateOptionalParams,
  SerialPortsCreateResponse,
  SerialPortsDeleteOptionalParams,
  SerialPortsListBySubscriptionsOptionalParams,
  SerialPortsListBySubscriptionsResponse,
  SerialPortsConnectOptionalParams,
  SerialPortsConnectResponse
} from "../models/index.js";

/** Interface representing a SerialPorts. */
export interface SerialPorts {
  /**
   * Lists all of the configured serial ports for a parent resource
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourceType The resource type of the parent resource.  For example: 'virtualMachines'
   *                           or 'virtualMachineScaleSets'
   * @param parentResource The resource name, or subordinate path, for the parent of the serial port. For
   *                       example: the name of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourceType: string,
    parentResource: string,
    options?: SerialPortsListOptionalParams
  ): Promise<SerialPortsListResponse>;
  /**
   * Gets the configured settings for a serial port
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourceType The resource type of the parent resource.  For example: 'virtualMachines'
   *                           or 'virtualMachineScaleSets'
   * @param parentResource The resource name, or subordinate path, for the parent of the serial port. For
   *                       example: the name of the virtual machine.
   * @param serialPort The name of the serial port to connect to.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourceType: string,
    parentResource: string,
    serialPort: string,
    options?: SerialPortsGetOptionalParams
  ): Promise<SerialPortsGetResponse>;
  /**
   * Creates or updates a serial port
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourceType The resource type of the parent resource.  For example: 'virtualMachines'
   *                           or 'virtualMachineScaleSets'
   * @param parentResource The resource name, or subordinate path, for the parent of the serial port. For
   *                       example: the name of the virtual machine.
   * @param serialPort The name of the serial port to create.
   * @param parameters Parameters supplied to create the serial port.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourceType: string,
    parentResource: string,
    serialPort: string,
    parameters: SerialPort,
    options?: SerialPortsCreateOptionalParams
  ): Promise<SerialPortsCreateResponse>;
  /**
   * Deletes a serial port
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourceType The resource type of the parent resource.  For example: 'virtualMachines'
   *                           or 'virtualMachineScaleSets'
   * @param parentResource The resource name, or subordinate path, for the parent of the serial port. For
   *                       example: the name of the virtual machine.
   * @param serialPort The name of the serial port to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourceType: string,
    parentResource: string,
    serialPort: string,
    options?: SerialPortsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Handles requests to list all SerialPort resources in a subscription.
   * @param options The options parameters.
   */
  listBySubscriptions(
    options?: SerialPortsListBySubscriptionsOptionalParams
  ): Promise<SerialPortsListBySubscriptionsResponse>;
  /**
   * Connect to serial port of the target resource
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourceType The resource type of the parent resource.  For example: 'virtualMachines'
   *                           or 'virtualMachineScaleSets'
   * @param parentResource The resource name, or subordinate path, for the parent of the serial port. For
   *                       example: the name of the virtual machine.
   * @param serialPort The name of the serial port to connect to.
   * @param options The options parameters.
   */
  connect(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourceType: string,
    parentResource: string,
    serialPort: string,
    options?: SerialPortsConnectOptionalParams
  ): Promise<SerialPortsConnectResponse>;
}
