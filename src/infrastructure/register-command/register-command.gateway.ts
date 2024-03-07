import * as vscode from "vscode";

import { RegisterCommandRepository } from "../../domain";
import { COMMAND } from "../../constants/constants";

export class RegisterCommandGateway implements RegisterCommandRepository {
  register(callback: () => void, commandId?: string) {
    return vscode.commands.registerCommand(commandId ?? COMMAND, callback);
  }
}
