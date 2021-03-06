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
class BranchStatusValue {
  /**
   * Create a BranchStatusValue.
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
   * Defines the metadata of BranchStatusValue
   *
   * @returns {object} metadata of BranchStatusValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchStatusValue',
      type: {
        name: 'Composite',
        className: 'BranchStatusValue',
        modelProperties: {
          branch: {
            required: false,
            serializedName: 'branch',
            type: {
              name: 'Composite',
              className: 'BranchStatusValueBranch'
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

module.exports = BranchStatusValue;
