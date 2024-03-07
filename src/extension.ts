import * as vscode from "vscode";
import { CreateExtensionGateway } from "./infrastructure";

const createExtension = new CreateExtensionGateway();

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(createExtension.create());
}

export function deactivate() {}
