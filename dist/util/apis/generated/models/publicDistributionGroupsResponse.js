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
 * Class representing a PublicDistributionGroupsResponse.
 */
class PublicDistributionGroupsResponse {
  /**
   * Create a PublicDistributionGroupsResponse.
   * @property {uuid} id The id of the distribution group
   */
  constructor() {
  }

  /**
   * Defines the metadata of PublicDistributionGroupsResponse
   *
   * @returns {object} metadata of PublicDistributionGroupsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublicDistributionGroupsResponse',
      type: {
        name: 'Composite',
        className: 'PublicDistributionGroupsResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PublicDistributionGroupsResponse;
