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
 * The diagnostic id for the given publish action
 *
 */
class DiagnosticIdResponse {
  /**
   * Create a DiagnosticIdResponse.
   * @property {string} [diagnosticId] diagnostic id
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticIdResponse
   *
   * @returns {object} metadata of DiagnosticIdResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticIdResponse',
      type: {
        name: 'Composite',
        className: 'DiagnosticIdResponse',
        modelProperties: {
          diagnosticId: {
            required: false,
            serializedName: 'diagnostic_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticIdResponse;
