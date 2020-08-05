/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary Device List
  *
 * A list of device IDs
 *
 */
class DeviceList {
  /**
   * Create a DeviceList.
   * @property {array} devices
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceList
   *
   * @returns {object} metadata of DeviceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceList',
      type: {
        name: 'Composite',
        className: 'DeviceList',
        modelProperties: {
          devices: {
            required: true,
            serializedName: 'devices',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceList;
