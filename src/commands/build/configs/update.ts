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

@help("Update branch configuration")
export default class UpdateBranchesConfigurationsCommand extends AppCommand {
  @help("Branch name to update configuration")
  @shortName("b")
  @longName("branch")
  @required
  @hasArg
  public branchName: string;

  @help("Path to save configuration")
  @shortName("c")
  @longName("config")
  @hasArg
  public configPath: string;

  async run(client: AppCenterClient, portalBaseUrl: string): Promise<CommandResult> {
    const app = this.app;

    let config: any;

    try {
      debug(`Reading config file ${this.configPath}`);
      config = await out.progress(`Reading config file...`, fileUtils.readFrom(this.configPath));
    } catch (error) {
      debug(`Request failed - ${inspect(error)}`);
      return failure(ErrorCodes.Exception, "the Branch Configs request was rejected for an unknown reason");
    }

    debug(`Updating configs into branch ${this.branchName}`);
    debug(`Configuration ${JSON.stringify(config, null, 2)}`);

    let branchConfigUpdateResponse: ClientResponse<models.UpdateOKResponseModelModelModel>;

    if (!config) {
      debug(`Configuration file:\n${JSON.stringify(config, null, 2)}`);
      return failure(ErrorCodes.InvalidParameter, "Invalid configuration file");
    }

    debug("Cleaning config file");
    delete config.id;
    delete config.branch;

    try {
      branchConfigUpdateResponse = await out.progress(
        `Updating configs for branch ${this.branchName}...`,
        clientRequest<models.UpdateOKResponseModelModelModel>((cb) =>
          client.branchConfigurations.update(this.branchName, config, app.ownerName, app.appName, cb)
        )
      );
    } catch (error) {
      debug(`Request failed - ${inspect(error)}`);
      return failure(ErrorCodes.Exception, "the Branch Configs request was rejected for an unknown reason");
    }

    debug(`branchConfigUpdateResponse: \n${JSON.stringify(branchConfigUpdateResponse, null, 2)}`);

    out.text(`Configuration succefuly updated on branch: ${this.branchName}`);

    return success();
  }
}
