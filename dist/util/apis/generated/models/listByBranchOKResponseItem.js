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
 * Class representing a ListByBranchOKResponseItem.
 */
class ListByBranchOKResponseItem {
  /**
   * Create a ListByBranchOKResponseItem.
   * @property {number} id The build ID
   * @property {string} buildNumber The build number
   * @property {string} queueTime The time the build was queued
   * @property {string} [startTime] The time the build was started
   * @property {string} [finishTime] The time the build was finished
   * @property {string} [lastChangedDate] The time the build status was last
   * changed
   * @property {string} status The build status
   * @property {string} result The build result
   * @property {string} sourceBranch The source branch name
   * @property {string} sourceVersion The source SHA
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListByBranchOKResponseItem
   *
   * @returns {object} metadata of ListByBranchOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListByBranchOKResponseItem',
      type: {
        name: 'Composite',
        className: 'ListByBranchOKResponseItem',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            constraints: {
              ExclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          buildNumber: {
            required: true,
            serializedName: 'buildNumber',
            type: {
              name: 'String'
            }
          },
          queueTime: {
            required: true,
            serializedName: 'queueTime',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'String'
            }
          },
          finishTime: {
            required: false,
            serializedName: 'finishTime',
            type: {
              name: 'String'
            }
          },
          lastChangedDate: {
            required: false,
            serializedName: 'lastChangedDate',
            type: {
              name: 'String'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          result: {
            required: true,
            serializedName: 'result',
            type: {
              name: 'String'
            }
          },
          sourceBranch: {
            required: true,
            serializedName: 'sourceBranch',
            type: {
              name: 'String'
            }
          },
          sourceVersion: {
            required: true,
            serializedName: 'sourceVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListByBranchOKResponseItem;
