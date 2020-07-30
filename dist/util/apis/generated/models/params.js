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
 * The branch build configuration
 *
 */
class Params {
  /**
   * Create a Params.
   * @property {string} [trigger] Possible values include: 'continous',
   * 'continuous', 'manual'
   * @property {boolean} [testsEnabled]
   * @property {boolean} [badgeIsEnabled]
   * @property {boolean} [signed]
   * @property {string} [cloneFromBranch] A configured branch name to clone
   * from. If provided, all other parameters will be ignored. Only supported in
   * POST requests.
   * @property {object} [toolsets] The branch build configuration for each
   * toolset
   * @property {object} [toolsets.xcode] Build configuration when Xcode is part
   * of the build steps
   * @property {string} [toolsets.xcode.projectOrWorkspacePath] Xcode
   * project/workspace path
   * @property {string} [toolsets.xcode.podfilePath] Path to CococaPods file,
   * if present
   * @property {string} [toolsets.xcode.cartfilePath] Path to Carthage file, if
   * present
   * @property {string} [toolsets.xcode.provisioningProfileEncoded]
   * @property {string} [toolsets.xcode.certificateEncoded]
   * @property {string} [toolsets.xcode.provisioningProfileFileId]
   * @property {string} [toolsets.xcode.certificateFileId]
   * @property {string} [toolsets.xcode.provisioningProfileUploadId]
   * @property {array} [toolsets.xcode.appExtensionProvisioningProfileFiles]
   * @property {string} [toolsets.xcode.certificateUploadId]
   * @property {string} [toolsets.xcode.certificatePassword]
   * @property {string} [toolsets.xcode.scheme]
   * @property {string} [toolsets.xcode.xcodeVersion] Xcode version used to
   * build. Available versions can be found in "/xcode_versions" API. Default
   * is latest stable version, at the time when the configuration is set.
   * @property {string} [toolsets.xcode.provisioningProfileFilename]
   * @property {string} [toolsets.xcode.certificateFilename]
   * @property {string} [toolsets.xcode.teamId]
   * @property {boolean} [toolsets.xcode.automaticSigning]
   * @property {string} [toolsets.xcode.xcodeProjectSha] The selected
   * pbxproject hash to the repositroy
   * @property {string} [toolsets.xcode.archiveConfiguration] The build
   * configuration of the target to archive
   * @property {string} [toolsets.xcode.targetToArchive] The target id of the
   * selected scheme to archive
   * @property {boolean} [toolsets.xcode.forceLegacyBuildSystem] Setting this
   * to true forces the build to use Xcode legacy build system. Otherwise, the
   * setting from workspace settings is used.
   * By default new build system is used if workspace setting is not committed
   * to the repository. Only used for iOS React Native app, with Xcode 10.
   * @property {object} [toolsets.javascript] Build configuration when React
   * Native, or other JavaScript tech, is part of the build steps
   * @property {string} [toolsets.javascript.packageJsonPath] Path to
   * package.json file for the main project, e.g. "package.json" or
   * "myapp/package.json"
   * @property {boolean} [toolsets.javascript.runTests] Whether to run Jest
   * unit tests, via npm test, during the build
   * @property {string} [toolsets.javascript.reactNativeVersion] Version of
   * React Native from package.json files
   * @property {object} [toolsets.xamarin] Build configuration for Xamarin
   * projects
   * @property {string} [toolsets.xamarin.slnPath]
   * @property {boolean} [toolsets.xamarin.isSimBuild]
   * @property {string} [toolsets.xamarin.args]
   * @property {string} [toolsets.xamarin.configuration]
   * @property {string} [toolsets.xamarin.p12File]
   * @property {string} [toolsets.xamarin.p12Pwd]
   * @property {string} [toolsets.xamarin.provProfile]
   * @property {string} [toolsets.xamarin.monoVersion]
   * @property {string} [toolsets.xamarin.sdkBundle]
   * @property {string} [toolsets.xamarin.symlink] Symlink of the SDK Bundle
   * and Mono installation.
   * The build will use the associated Mono bundled with related Xamarin SDK.
   * If both symlink and monoVersion or sdkBundle are passed, the symlink is
   * taking precedence. If non-existing symlink is passed, the current stable
   * Mono version will be configured for building.
   * @property {object} [toolsets.android] Build configuration for Android
   * projects
   * @property {string} [toolsets.android.gradleWrapperPath] Path to the Gradle
   * wrapper script
   * @property {string} [toolsets.android.module] The Gradle module to build
   * @property {string} [toolsets.android.buildVariant] The Android build
   * variant to build
   * @property {boolean} [toolsets.android.runTests] Whether to run unit tests
   * during the build (default)
   * @property {boolean} [toolsets.android.runLint] Whether to run lint checks
   * during the build (default)
   * @property {boolean} [toolsets.android.isRoot] Whether it is the root
   * module or not
   * @property {boolean} [toolsets.android.automaticSigning] Whether to apply
   * automatic signing or not
   * @property {string} [toolsets.android.keystorePassword] The password of the
   * keystore
   * @property {string} [toolsets.android.keyAlias] The key alias
   * @property {string} [toolsets.android.keyPassword] The key password
   * @property {string} [toolsets.android.keystoreFilename] The name of the
   * keystore file
   * @property {string} [toolsets.android.keystoreEncoded] The keystore encoded
   * value
   * @property {object} [artifactVersioning] The versioning configuration for
   * artifacts built for this branch
   * @property {string} [artifactVersioning.buildNumberFormat] Possible values
   * include: 'buildId', 'timestamp'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Params
   *
   * @returns {object} metadata of Params
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'params',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'ParamsValueElementType',
                type: {
                  name: 'Composite',
                  className: 'ParamsValue'
                }
            }
          }
        },
        className: 'Params',
        modelProperties: {
          trigger: {
            required: false,
            serializedName: 'trigger',
            type: {
              name: 'String'
            }
          },
          testsEnabled: {
            required: false,
            serializedName: 'testsEnabled',
            type: {
              name: 'Boolean'
            }
          },
          badgeIsEnabled: {
            required: false,
            serializedName: 'badgeIsEnabled',
            type: {
              name: 'Boolean'
            }
          },
          signed: {
            required: false,
            serializedName: 'signed',
            type: {
              name: 'Boolean'
            }
          },
          cloneFromBranch: {
            required: false,
            serializedName: 'cloneFromBranch',
            type: {
              name: 'String'
            }
          },
          toolsets: {
            required: false,
            serializedName: 'toolsets',
            type: {
              name: 'Composite',
              className: 'ParamsToolsets'
            }
          },
          artifactVersioning: {
            required: false,
            serializedName: 'artifactVersioning',
            type: {
              name: 'Composite',
              className: 'ParamsArtifactVersioning'
            }
          }
        }
      }
    };
  }
}

module.exports = Params;
