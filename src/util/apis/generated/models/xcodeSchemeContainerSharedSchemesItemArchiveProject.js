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
 * Class representing a XcodeSchemeContainerSharedSchemesItemArchiveProject.
 */
class XcodeSchemeContainerSharedSchemesItemArchiveProject {
  /**
   * Create a XcodeSchemeContainerSharedSchemesItemArchiveProject.
   * @property {string} archiveTargetId The Id of the target to archive
   * @property {string} projectName The project to archive container name
   * @property {string} [projectPath] Full path of the target project
   */
  constructor() {
  }

  /**
   * Defines the metadata of XcodeSchemeContainerSharedSchemesItemArchiveProject
   *
   * @returns {object} metadata of XcodeSchemeContainerSharedSchemesItemArchiveProject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'XcodeSchemeContainer_sharedSchemesItem_archiveProject',
      type: {
        name: 'Composite',
        className: 'XcodeSchemeContainerSharedSchemesItemArchiveProject',
        modelProperties: {
          archiveTargetId: {
            required: true,
            serializedName: 'archiveTargetId',
            type: {
              name: 'String'
            }
          },
          projectName: {
            required: true,
            serializedName: 'projectName',
            type: {
              name: 'String'
            }
          },
          projectPath: {
            required: false,
            serializedName: 'projectPath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = XcodeSchemeContainerSharedSchemesItemArchiveProject;
