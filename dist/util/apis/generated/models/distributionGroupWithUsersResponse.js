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
 * Class representing a DistributionGroupWithUsersResponse.
 */
class DistributionGroupWithUsersResponse {
  /**
   * Create a DistributionGroupWithUsersResponse.
   * @property {uuid} id The unique ID of the distribution group
   * @property {string} name The name of the distribution group used in URLs
   * @property {number} totalUserCount The count of users in the distribution
   * group
   * @property {number} [totalGroupsCount] The count of aad groups in the
   * distribution group
   * @property {number} notifiedUserCount The count of non-pending users in the
   * distribution group who will be notified by new releases
   * @property {boolean} [isPublic] Whether the distribution group is public
   * @property {array} users The distribution group users
   * @property {array} [aadGroups] The distribution group aad groups
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupWithUsersResponse
   *
   * @returns {object} metadata of DistributionGroupWithUsersResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupWithUsersResponse',
      type: {
        name: 'Composite',
        className: 'DistributionGroupWithUsersResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          totalUserCount: {
            required: true,
            serializedName: 'total_user_count',
            type: {
              name: 'Number'
            }
          },
          totalGroupsCount: {
            required: false,
            serializedName: 'total_groups_count',
            type: {
              name: 'Number'
            }
          },
          notifiedUserCount: {
            required: true,
            serializedName: 'notified_user_count',
            type: {
              name: 'Number'
            }
          },
          isPublic: {
            required: false,
            serializedName: 'is_public',
            type: {
              name: 'Boolean'
            }
          },
          users: {
            required: true,
            serializedName: 'users',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DistributionGroupWithUsersResponseUsersItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DistributionGroupWithUsersResponseUsersItem'
                  }
              }
            }
          },
          aadGroups: {
            required: false,
            serializedName: 'aad_groups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DistributionGroupWithUsersResponseAadGroupsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DistributionGroupWithUsersResponseAadGroupsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupWithUsersResponse;
