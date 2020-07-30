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
 * Class representing a TeamAppResponse.
 */
class TeamAppResponse {
  /**
   * Create a TeamAppResponse.
   * @property {uuid} id The internal unique id (UUID) of the team.
   * @property {string} name The name of the team
   * @property {string} displayName The display name of the team
   * @property {string} [description] The description of the team
   * @property {array} [permissions] The permissions the team has for the app
   */
  constructor() {
  }

  /**
   * Defines the metadata of TeamAppResponse
   *
   * @returns {object} metadata of TeamAppResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TeamAppResponse',
      type: {
        name: 'Composite',
        className: 'TeamAppResponse',
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
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: false,
            serializedName: 'permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TeamAppResponse;
