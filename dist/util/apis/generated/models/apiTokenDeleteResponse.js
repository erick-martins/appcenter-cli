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
 * Class representing a ApiTokenDeleteResponse.
 */
class ApiTokenDeleteResponse {
  /**
   * Create a ApiTokenDeleteResponse.
   * @property {uuid} id The unique id (UUID) of the api token
   * @property {string} tokenHash The hashed value of api token
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiTokenDeleteResponse
   *
   * @returns {object} metadata of ApiTokenDeleteResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiTokenDeleteResponse',
      type: {
        name: 'Composite',
        className: 'ApiTokenDeleteResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          tokenHash: {
            required: true,
            serializedName: 'token_hash',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiTokenDeleteResponse;
