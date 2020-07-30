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
 * apple certificate secret details.
 *
 */
class AppleCertificateSecretDetailsResponseData {
  /**
   * Create a AppleCertificateSecretDetailsResponseData.
   * @property {string} base64Certificate The certificate contents in base 64
   * encoded string
   * @property {string} password The password for the certificate
   * @property {string} displayName The display name (CN) of the certificate
   * @property {string} certificateValidityStartDate The date-time from which
   * the certificate is valid
   * @property {string} certificateValidityEndDate The date-time till which the
   * certificate is valid
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleCertificateSecretDetailsResponseData
   *
   * @returns {object} metadata of AppleCertificateSecretDetailsResponseData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleCertificateSecretDetailsResponse_data',
      type: {
        name: 'Composite',
        className: 'AppleCertificateSecretDetailsResponseData',
        modelProperties: {
          base64Certificate: {
            required: true,
            serializedName: 'base64Certificate',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          certificateValidityStartDate: {
            required: true,
            serializedName: 'certificateValidityStartDate',
            type: {
              name: 'String'
            }
          },
          certificateValidityEndDate: {
            required: true,
            serializedName: 'certificateValidityEndDate',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleCertificateSecretDetailsResponseData;
