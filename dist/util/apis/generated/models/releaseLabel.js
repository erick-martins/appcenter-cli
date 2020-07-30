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
 * Class representing a ReleaseLabel.
 */
class ReleaseLabel {
  /**
   * Create a ReleaseLabel.
   * @property {string} [label]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseLabel
   *
   * @returns {object} metadata of ReleaseLabel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'releaseLabel',
      type: {
        name: 'Composite',
        className: 'ReleaseLabel',
        modelProperties: {
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseLabel;
