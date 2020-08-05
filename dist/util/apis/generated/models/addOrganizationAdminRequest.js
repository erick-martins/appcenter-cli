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
 * Class representing a AddOrganizationAdminRequest.
 */
class AddOrganizationAdminRequest {
  /**
   * Create a AddOrganizationAdminRequest.
   * @property {uuid} userId The internal unique id (UUID) of the account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AddOrganizationAdminRequest
   *
   * @returns {object} metadata of AddOrganizationAdminRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AddOrganizationAdminRequest',
      type: {
        name: 'Composite',
        className: 'AddOrganizationAdminRequest',
        modelProperties: {
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AddOrganizationAdminRequest;
