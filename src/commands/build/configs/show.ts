import { inspect } from "util";
import { AppCenterClient, clientRequest, ClientResponse, models } from "../../../util/apis";
import {
  AppCommand,
  CommandResult,
  ErrorCodes,
  failure,
  hasArg,
  help,
  longName,
  required,
  shortName,
  success,
} from "../../../util/commandline";
import { out } from "../../../util/interaction";
import * as fileUtils from "./lib/file-utils";

const debug = require("debug")("appcenter-cli:commands:build:branches:show");

const reportFormat = [
  ["Trigger", "trigger"],
  ["Tests Enabled", "testsEnabled"],
  ["Badge is Enabled", "badgeIsEnabled"],
  ["Signed", "signed"],
];

@help("Show branch configuration")
export default class ShowBranchesConfigurationsCommand extends AppCommand {
  @help("Branch name for get configuration")
  @shortName("b")
  @longName("branch")
  @required
  @hasArg
  public branchName: string;

  @help("Path to save configuration")
  @shortName("o")
  @longName("out")
  @hasArg
  public out: string;

  async run(client: AppCenterClient, portalBaseUrl: string): Promise<CommandResult> {
    const app = this.app;

    debug(`Getting configs for branch ${this.branchName}`);
    let branchConfigurationResponse: ClientResponse<models.BranchConfiguration>;
    try {
      branchConfigurationResponse = await out.progress(
        `Getting configs for branch ${this.branchName}...`,
        clientRequest<models.BranchConfiguration>((cb) =>
          client.branchConfigurations.get(this.branchName, app.ownerName, app.appName, cb)
        )
      );
    } catch (error) {
      if (error.statusCode === 400) {
        return failure(ErrorCodes.IllegalCommand, `app ${app.appName} is not configured for building`);
      } else if (error.statusCode === 404) {
        return failure(ErrorCodes.NotFound, `branch ${this.branchName} hasn't configured yet`);
      } else {
        debug(`Request failed - ${inspect(error)}`);
        return failure(ErrorCodes.Exception, "the Branch Configs request was rejected for an unknown reason");
      }
    }

    const branchConfiguration = branchConfigurationResponse.result;

    out.reportNewLineSeparatedArray(reportFormat, [branchConfiguration]);

    if (this.out) {
      let location = "";
      try {
        location = await out.progress(`Saving to file ${this.out}...`, fileUtils.saveTo(this.out, branchConfiguration));
      } catch (error) {
        if (error.statusCode === 400) {
          return failure(ErrorCodes.IllegalCommand, `app ${app.appName} is not configured for building`);
        } else if (error.statusCode === 404) {
          return failure(ErrorCodes.NotFound, `branch ${this.branchName} hasn't configured yet`);
        } else {
          debug(`Request failed - ${inspect(error)}`);
          return failure(ErrorCodes.Exception, "the Branch Configs request was rejected for an unknown reason");
        }
      }
      out.text(`\nSaved to: ${location}`);
    } else {
      out.text(`\nFull configuration: \n${JSON.stringify(branchConfiguration, null, 2)}`);
    }
    return success();
  }
}
