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
 * Usage for a single period
 *
 */
class BillingResourceUsageTestServiceCurrentUsagePeriod {
  /**
   * Create a BillingResourceUsageTestServiceCurrentUsagePeriod.
   * @property {string} [startTime] Inclusive start time of the usage period
   * @property {string} [endTime] Exclusive end time of the usage period.
   * @property {object} [byAccount] A collection of named numeric values
   * @property {object} [byApp] A collection of  named numeric values grouped
   * by app
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingResourceUsageTestServiceCurrentUsagePeriod
   *
   * @returns {object} metadata of BillingResourceUsageTestServiceCurrentUsagePeriod
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingResourceUsage_testService_currentUsagePeriod',
      type: {
        name: 'Composite',
        className: 'BillingResourceUsageTestServiceCurrentUsagePeriod',
        modelProperties: {
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'String'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'String'
            }
          },
          byAccount: {
            required: false,
            serializedName: 'byAccount',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          byApp: {
            required: false,
            serializedName: 'byApp',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'NumberElementType',
                        type: {
                          name: 'Number'
                        }
                    }
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BillingResourceUsageTestServiceCurrentUsagePeriod;
