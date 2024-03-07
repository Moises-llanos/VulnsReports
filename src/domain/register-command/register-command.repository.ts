import * as vscode from "vscode";

export abstract class RegisterCommandRepository {
  abstract register(
    callback: () => void,
    commandId?: string
  ): vscode.Disposable;
}
