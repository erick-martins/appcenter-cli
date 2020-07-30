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
 * Basic information on a release
 *
 */
class AvailableToTesterOKResponseItem {
  /**
   * Create a AvailableToTesterOKResponseItem.
   * @property {number} id ID identifying this unique release.
   * @property {string} version The release's version.<br>
   * For iOS: CFBundleVersion from info.plist.<br>
   * For Android: android:versionCode from AppManifest.xml.
   * @property {string} [origin] The release's origin. Possible values include:
   * 'hockeyapp', 'appcenter'
   * @property {string} shortVersion The release's short version.<br>
   * For iOS: CFBundleShortVersionString from info.plist.<br>
   * For Android: android:versionName from AppManifest.xml.
   * @property {boolean} enabled This value determines the whether a release
   * currently is enabled or disabled.
   * @property {string} uploadedAt UTC time in ISO 8601 format of the uploaded
   * time.
   * @property {string} [destinationType] OBSOLETE. Will be removed in next
   * version. The destination type.<br>
   * <b>group</b>: The release distributed to internal groups and
   * distribution_groups details will be returned.<br>
   * <b>store</b>: The release distributed to external stores and
   * distribution_stores details will be returned. <br>
   * . Possible values include: 'group', 'store', 'tester'
   * @property {array} [distributionGroups] OBSOLETE. Will be removed in next
   * version. A list of distribution groups that are associated with this
   * release.
   * @property {array} [distributionStores] OBSOLETE. Will be removed in next
   * version. A list of distribution stores that are associated with this
   * release.
   * @property {array} [destinations] A list of distribution groups or stores.
   * @property {object} [build] Build information for the release
   * @property {string} [build.branchName] The branch name of the build
   * producing the release
   * @property {string} [build.commitHash] The commit hash of the build
   * producing the release
   * @property {string} [build.commitMessage] The commit message of the build
   * producing the release
   * @property {boolean} [isExternalBuild] This value determines if a release
   * is external or not.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailableToTesterOKResponseItem
   *
   * @returns {object} metadata of AvailableToTesterOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableToTesterOKResponseItem',
      type: {
        name: 'Composite',
        className: 'AvailableToTesterOKResponseItem',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          version: {
            required: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          shortVersion: {
            required: true,
            serializedName: 'short_version',
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: true,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          uploadedAt: {
            required: true,
            serializedName: 'uploaded_at',
            type: {
              name: 'String'
            }
          },
          destinationType: {
            required: false,
            serializedName: 'destination_type',
            type: {
              name: 'String'
            }
          },
          distributionGroups: {
            required: false,
            serializedName: 'distribution_groups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AvailableToTesterOKResponseItemDistributionGroupsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'AvailableToTesterOKResponseItemDistributionGroupsItem'
                  }
              }
            }
          },
          distributionStores: {
            required: false,
            serializedName: 'distribution_stores',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AvailableToTesterOKResponseItemDistributionStoresItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'AvailableToTesterOKResponseItemDistributionStoresItem'
                  }
              }
            }
          },
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AvailableToTesterOKResponseItemDestinationsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'AvailableToTesterOKResponseItemDestinationsItem'
                  }
              }
            }
          },
          build: {
            required: false,
            serializedName: 'build',
            type: {
              name: 'Composite',
              className: 'AvailableToTesterOKResponseItemBuild'
            }
          },
          isExternalBuild: {
            required: false,
            serializedName: 'is_external_build',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableToTesterOKResponseItem;
