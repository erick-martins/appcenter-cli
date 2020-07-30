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
 * Class representing a UpdateCheckErrorModel.
 */
class UpdateCheckErrorModel {
  /**
   * Create a UpdateCheckErrorModel.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateCheckErrorModel
   *
   * @returns {object} metadata of UpdateCheckErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateCheckErrorModel',
      type: {
        name: 'Composite',
        className: 'UpdateCheckErrorModel',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateCheckErrorModel;
