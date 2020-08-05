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
 * Github bugtracker specific settings
 *
 */
class AlertingGithubBugtrackerSettings {
  /**
   * Create a AlertingGithubBugtrackerSettings.
   * @property {string} [callbackUrl]
   * @property {string} ownerName
   * @property {string} type type of bugtracker. Possible values include:
   * 'github', 'vsts', 'jira'
   * @property {number} githubRepoId
   * @property {string} githubRepoName
   * @property {string} [githubLabel]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertingGithubBugtrackerSettings
   *
   * @returns {object} metadata of AlertingGithubBugtrackerSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'github',
      type: {
        name: 'Composite',
        className: 'AlertingGithubBugtrackerSettings',
        modelProperties: {
          callbackUrl: {
            required: false,
            serializedName: 'callback_url',
            type: {
              name: 'String'
            }
          },
          ownerName: {
            required: true,
            serializedName: 'owner_name',
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
          githubRepoId: {
            required: true,
            serializedName: 'github_repo_id',
            type: {
              name: 'Number'
            }
          },
          githubRepoName: {
            required: true,
            serializedName: 'github_repo_name',
            type: {
              name: 'String'
            }
          },
          githubLabel: {
            required: false,
            serializedName: 'github_label',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertingGithubBugtrackerSettings;
