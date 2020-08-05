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
 * Class representing a UsersResponseValueItem.
 */
class UsersResponseValueItem {
  /**
   * Create a UsersResponseValueItem.
   * @property {uuid} accountId
   * @property {string} [mail]
   * @property {string} displayName
   */
  constructor() {
  }

  /**
   * Defines the metadata of UsersResponseValueItem
   *
   * @returns {object} metadata of UsersResponseValueItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsersResponse_valueItem',
      type: {
        name: 'Composite',
        className: 'UsersResponseValueItem',
        modelProperties: {
          accountId: {
            required: true,
            serializedName: 'accountId',
            type: {
              name: 'String'
            }
          },
          mail: {
            required: false,
            serializedName: 'mail',
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
          }
        }
      }
    };
  }
}

module.exports = UsersResponseValueItem;
