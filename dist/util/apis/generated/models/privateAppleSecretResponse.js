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
 * private Apple connection secrets response
 *
 */
class PrivateAppleSecretResponse {
  /**
   * Create a PrivateAppleSecretResponse.
   * @property {string} id id of the shared connection
   * @property {string} [displayName] display name of shared connection
   * @property {string} serviceType service type of shared connection can be
   * apple|gitlab|googleplay|jira|applecertificate. Possible values include:
   * 'apple', 'jira', 'googleplay', 'gitlab'
   * @property {boolean} [isValid] whether the credentials are valid or not
   * @property {boolean} [is2FA] if the account is a 2FA account or not
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateAppleSecretResponse
   *
   * @returns {object} metadata of PrivateAppleSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'apple',
      type: {
        name: 'Composite',
        className: 'PrivateAppleSecretResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            type: {
              name: 'String'
            }
          },
          isValid: {
            required: false,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          is2FA: {
            required: false,
            serializedName: 'is2FA',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateAppleSecretResponse;
