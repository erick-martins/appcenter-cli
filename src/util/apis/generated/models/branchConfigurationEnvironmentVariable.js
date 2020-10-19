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
 * Class representing a BranchCommit.
 */
class BranchConfigurationEnvironmentVariable {
  /**
   * Create a EnvironmentVariable.
   * @property {string} [value] The commit SHA
   * @property {string} [name] The URL to the commit
   */
  constructor() {
  }

  /**
   * Defines the metadata of BranchCommit
   *
   * @returns {object} metadata of BranchCommit
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchConfigurationEnvironmentVariableType',
      type: {
        name: 'Composite',
        className: 'BranchConfigurationEnvironmentVariable',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
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
          }
        }
      }
    };
  }
}

module.exports = BranchConfigurationEnvironmentVariable;