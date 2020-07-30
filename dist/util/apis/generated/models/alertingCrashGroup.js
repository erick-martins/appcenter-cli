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
 * Class representing a AlertingCrashGroup.
 */
class AlertingCrashGroup {
  /**
   * Create a AlertingCrashGroup.
   * @property {string} [url]
   * @property {string} [appDisplayName]
   * @property {string} [appPlatform] SDK/Platform this thread is beeing
   * generated from. Possible values include: 'ios', 'android', 'xamarin',
   * 'react-native', 'ndk', 'unity', 'other'
   * @property {string} [appVersion]
   * @property {string} [id]
   * @property {string} [name]
   * @property {string} [reason]
   * @property {array} [stackTrace]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertingCrashGroup
   *
   * @returns {object} metadata of AlertingCrashGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertingCrashGroup',
      type: {
        name: 'Composite',
        className: 'AlertingCrashGroup',
        modelProperties: {
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          appDisplayName: {
            required: false,
            serializedName: 'app_display_name',
            type: {
              name: 'String'
            }
          },
          appPlatform: {
            required: false,
            serializedName: 'app_platform',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: false,
            serializedName: 'app_version',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          stackTrace: {
            required: false,
            serializedName: 'stack_trace',
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

module.exports = AlertingCrashGroup;
