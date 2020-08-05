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
 * Class representing a SubmitDsrOperationResponse.
 */
class SubmitDsrOperationResponse {
  /**
   * Create a SubmitDsrOperationResponse.
   * @property {string} [status] The status of the DSR operation. Possible
   * values include: 'NotStarted', 'InProgress', 'Completed', 'Failure'
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubmitDsrOperationResponse
   *
   * @returns {object} metadata of SubmitDsrOperationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubmitDsrOperationResponse',
      type: {
        name: 'Composite',
        className: 'SubmitDsrOperationResponse',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SubmitDsrOperationResponse;
