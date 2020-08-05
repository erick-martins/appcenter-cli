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
 * Class representing a GDPRPurgeVerifyResponse.
 */
class GDPRPurgeVerifyResponse {
  /**
   * Create a GDPRPurgeVerifyResponse.
   * @property {boolean} success indicate whether GDPR purge operation succeeds
   * or not
   */
  constructor() {
  }

  /**
   * Defines the metadata of GDPRPurgeVerifyResponse
   *
   * @returns {object} metadata of GDPRPurgeVerifyResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GDPRPurgeVerifyResponse',
      type: {
        name: 'Composite',
        className: 'GDPRPurgeVerifyResponse',
        modelProperties: {
          success: {
            required: true,
            serializedName: 'success',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = GDPRPurgeVerifyResponse;
