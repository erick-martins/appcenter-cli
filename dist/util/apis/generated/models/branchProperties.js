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
 * The branch build core properties
 *
 */
class BranchProperties {
  /**
   * Create a BranchProperties.
   * @property {object} [branch]
   * @property {string} [branch.name] The branch name
   * @property {object} [branch.commit]
   * @property {string} [branch.commit.sha] The commit SHA
   * @property {string} [branch.commit.url] The URL to the commit
   * @property {boolean} [enabled]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BranchProperties
   *
   * @returns {object} metadata of BranchProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchProperties',
      type: {
        name: 'Composite',
        className: 'BranchProperties',
        modelProperties: {
          branch: {
            required: false,
            serializedName: 'branch',
            type: {
              name: 'Composite',
              className: 'BranchPropertiesBranch'
            }
          },
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = BranchProperties;
