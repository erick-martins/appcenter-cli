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

const debug = require("debug")("appcenter-cli:commands:build:branches:show");

const reportFormat = [
  ["Trigger", "trigger"],
  ["Tests Enabled", "testsEnabled"],
  ["Badge is Enabled", "badgeIsEnabled"],
  ["Signed", "signed"],
];

@help("Clone branch configuration")
export default class CloneBranchesConfigurationsCommand extends AppCommand {
  @help("Branch name to clone configuration")
  @shortName("b")
  @longName("branch")
  @required
  @hasArg
  public branchName: string;

  @help("Source branch name")
  @shortName("s")
  @longName("source")
  @hasArg
  public sourceBranchName: string;

  async run(client: AppCenterClient, portalBaseUrl: string): Promise<CommandResult> {
    const app = this.app;

    debug(`Getting configs for branch ${this.branchName}`);
    // let branchConfigurationResponse: ClientResponse<models.BranchConfiguration>;
    let branchConfigurationCreateResponse: ClientResponse<models.CreateOKResponseModelModelModel>;

    try {
      // branchConfigurationResponse = await out.progress(
      //   `Getting configs for branch ${this.branchName}...`,
      //   clientRequest<models.BranchConfiguration>((cb) =>
      //     client.branchConfigurations.get(this.branchName, app.ownerName, app.appName, cb)
      //   )
      // );

      // branchConfiguration = branchConfigurationResponse.result;

      const config = { cloneFromBranch: this.sourceBranchName };

      branchConfigurationCreateResponse = await out.progress(
        `Cloning configs from branch ${this.sourceBranchName} to ${this.branchName}...`,
        clientRequest<models.CreateOKResponseModelModelModel>((cb) =>
          client.branchConfigurations.create(this.branchName, config, app.ownerName, app.appName, cb)
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

    const branchConfiguration = branchConfigurationCreateResponse.result;

    out.reportNewLineSeparatedArray(reportFormat, [branchConfiguration]);

    debug(`\nFull configuration: \n${JSON.stringify(branchConfiguration, null, 2)}`);
    out.text(`Configurations succesfuly cloned from branch ${this.sourceBranchName} to ${this.branchName}`);

    return success();
  }
}
