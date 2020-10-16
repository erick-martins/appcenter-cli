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
 * Distribution configuration
 *
 */
class ParamsToolsetsDistribution {
  /**
   * Create a ParamsToolsetsDistribution.
   * @property {string} [destinationType] 
   * @property {string} [destinationSubtype] 
   * @property {string} [releaseNotes] 
   * @property {boolean} [isSilent] 
   * @property {array} [destinations] 
   */
  constructor() {
  }

  /**
   * Defines the metadata of ParamsToolsetsDistribution
   *
   * @returns {object} metadata of ParamsToolsetsDistribution
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'params_toolsets_distribution',
      type: {
        name: 'Composite',
        className: 'ParamsToolsetsDistribution',
        modelProperties: {
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  type: {
                    name: 'String',
                  }
              }
            }
          },
          destinationType: {
            required: false,
            serializedName: 'destinationType',
            type: {
              name: 'String'
            }
          },
          destinationSubtype: {
            required: false,
            serializedName: 'destinationSubtype',
            type: {
              name: 'String'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'releaseNotes',
            type: {
              name: 'String'
            }
          },
          isSilent: {
            required: false,
            serializedName: 'isSilent',
            type: {
              name: 'Boolean'
            }
          },
          notifyTesters: {
            required: false,
            serializedName: 'notifyTesters',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ParamsToolsetsDistribution;
