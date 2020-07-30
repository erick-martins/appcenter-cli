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
 * Class representing a RepoConfigsItem.
 */
class RepoConfigsItem {
  /**
   * Create a RepoConfigsItem.
   * @property {string} repoUrl The repository's git url, must be a HTTPS URL
   * @property {string} [repoId] The repository id from the repository
   * provider. Required for repositories connected from GitHub App and
   * GitLab.com
   * @property {string} [externalUserId] The external user id from the
   * repository provider. Required for GitLab.com repositories
   * @property {string} [serviceConnectionId] The id of the service connection
   * (private). Required for GitLab self-hosted repositories
   * @property {string} [installationId] The GitHub App Installation id.
   * Required for repositories connected from GitHub App
   * @property {string} id Repository configuration identifier
   * @property {string} type Type of repository
   * @property {string} state State of the configuration. Possible values
   * include: 'unauthorized', 'inactive', 'active'
   * @property {string} [userEmail] Email of the user who linked the repository
   */
  constructor() {
  }

  /**
   * Defines the metadata of RepoConfigsItem
   *
   * @returns {object} metadata of RepoConfigsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RepoConfigsItem',
      type: {
        name: 'Composite',
        className: 'RepoConfigsItem',
        modelProperties: {
          repoUrl: {
            required: true,
            serializedName: 'repo_url',
            type: {
              name: 'String'
            }
          },
          repoId: {
            required: false,
            serializedName: 'repo_id',
            type: {
              name: 'String'
            }
          },
          externalUserId: {
            required: false,
            serializedName: 'external_user_id',
            type: {
              name: 'String'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          },
          installationId: {
            required: false,
            serializedName: 'installation_id',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          userEmail: {
            required: false,
            serializedName: 'user_email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RepoConfigsItem;
