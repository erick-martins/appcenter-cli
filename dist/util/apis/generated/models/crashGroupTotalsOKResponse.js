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
 * Class representing a CrashGroupTotalsOKResponse.
 */
class CrashGroupTotalsOKResponse {
  /**
   * Create a CrashGroupTotalsOKResponse.
   * @property {number} [crashCount]
   * @property {number} [deviceCount]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroupTotalsOKResponse
   *
   * @returns {object} metadata of CrashGroupTotalsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashGroupTotalsOKResponse',
      type: {
        name: 'Composite',
        className: 'CrashGroupTotalsOKResponse',
        modelProperties: {
          crashCount: {
            required: false,
            serializedName: 'crash_count',
            type: {
              name: 'Number'
            }
          },
          deviceCount: {
            required: false,
            serializedName: 'device_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroupTotalsOKResponse;
