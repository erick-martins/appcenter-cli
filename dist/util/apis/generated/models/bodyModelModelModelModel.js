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
 * Class representing a BodyModelModelModelModel.
 */
class BodyModelModelModelModel {
  /**
   * Create a BodyModelModelModelModel.
   * @property {uuid} id Unique id of the release destination
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModel',
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

module.exports = BodyModelModelModelModel;
