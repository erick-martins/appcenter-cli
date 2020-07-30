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
 * Class representing a GetForOrgErrorModel.
 */
class GetForOrgErrorModel {
  /**
   * Create a GetForOrgErrorModel.
   * @property {object} error
   * @property {string} [error.code] Possible values include: 'BadRequest',
   * 'Conflict', 'NotAcceptable', 'NotFound', 'InternalServerError',
   * 'Unauthorized', 'TooManyRequests'
   * @property {string} [error.message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetForOrgErrorModel
   *
   * @returns {object} metadata of GetForOrgErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetForOrgErrorModel',
      type: {
        name: 'Composite',
        className: 'GetForOrgErrorModel',
        modelProperties: {
          error: {
            required: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'GetForOrgErrorModelError'
            }
          }
        }
      }
    };
  }
}

module.exports = GetForOrgErrorModel;
