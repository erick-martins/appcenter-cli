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
 * An event property value with counts.
 *
 */
class EventPropertyValue {
  /**
   * Create a EventPropertyValue.
   * @property {string} [name] The event property value name.
   * @property {number} [count] The count of the the event property value.
   * @property {number} [previousCount] The count of previous time range of the
   * event property value.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventPropertyValue
   *
   * @returns {object} metadata of EventPropertyValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventPropertyValue',
      type: {
        name: 'Composite',
        className: 'EventPropertyValue',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          previousCount: {
            required: false,
            serializedName: 'previous_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = EventPropertyValue;
