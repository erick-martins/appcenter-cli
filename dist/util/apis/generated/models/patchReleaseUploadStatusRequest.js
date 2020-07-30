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
 * Class representing a PatchReleaseUploadStatusRequest.
 */
class PatchReleaseUploadStatusRequest {
  /**
   * Create a PatchReleaseUploadStatusRequest.
   * @property {string} uploadStatus The new status of the release upload.
   * Possible values include: 'uploadFinished', 'uploadCanceled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PatchReleaseUploadStatusRequest
   *
   * @returns {object} metadata of PatchReleaseUploadStatusRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PatchReleaseUploadStatusRequest',
      type: {
        name: 'Composite',
        className: 'PatchReleaseUploadStatusRequest',
        modelProperties: {
          uploadStatus: {
            required: true,
            serializedName: 'upload_status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PatchReleaseUploadStatusRequest;
