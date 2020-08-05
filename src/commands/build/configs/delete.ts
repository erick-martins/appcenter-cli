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

@help("Delete branch configuration")
export default class DeleteBranchesConfigurationsCommand extends AppCommand {
  @help("Branch name to delete configuration")
  @shortName("b")
  @longName("branch")
  @required
  @hasArg
  public branchName: string;

  async run(client: AppCenterClient, portalBaseUrl: string): Promise<CommandResult> {
    const app = this.app;

    let branchConfigDeleteResponse: ClientResponse<models.DeleteOKResponseModel>;

    try {
      branchConfigDeleteResponse = await out.progress(
        `Deleting configs for branch ${this.branchName}...`,
        clientRequest<models.DeleteOKResponseModel>((cb) =>
          client.branchConfigurations.deleteMethod(this.branchName, app.ownerName, app.appName, cb)
        )
      );
    } catch (error) {
      debug(`Request failed - ${inspect(error)}`);
      return failure(ErrorCodes.Exception, "the Branch Configs request was rejected for an unknown reason");
    }

    const { message } = branchConfigDeleteResponse.result;

    debug(`branchConfigDeleteResponse: \n${JSON.stringify(branchConfigDeleteResponse, null, 2)}`);

    out.text(message);

    return success();
  }
}
