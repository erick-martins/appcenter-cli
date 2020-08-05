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
 * Class representing a DistributionGroupModel.
 */
class DistributionGroupModel {
  /**
   * Create a DistributionGroupModel.
   * @property {string} [name] The name of the distribution group
   * @property {boolean} [isPublic] Whether the distribution group is public
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupModel
   *
   * @returns {object} metadata of DistributionGroupModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'distribution_group',
      type: {
        name: 'Composite',
        className: 'DistributionGroupModel',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          isPublic: {
            required: false,
            serializedName: 'is_public',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupModel;
