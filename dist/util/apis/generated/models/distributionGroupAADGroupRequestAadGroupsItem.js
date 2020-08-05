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
 * Class representing a DistributionGroupAADGroupRequestAadGroupsItem.
 */
class DistributionGroupAADGroupRequestAadGroupsItem {
  /**
   * Create a DistributionGroupAADGroupRequestAadGroupsItem.
   * @property {uuid} [aadGroupId] The id of the aad group
   * @property {string} [displayName] The display name of the aad group
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupAADGroupRequestAadGroupsItem
   *
   * @returns {object} metadata of DistributionGroupAADGroupRequestAadGroupsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupAADGroupRequest_aad_groupsItem',
      type: {
        name: 'Composite',
        className: 'DistributionGroupAADGroupRequestAadGroupsItem',
        modelProperties: {
          aadGroupId: {
            required: false,
            serializedName: 'aad_group_id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupAADGroupRequestAadGroupsItem;
