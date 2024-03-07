import * as vscode from "vscode";
import { StateConfigurationRepository } from "../../domain";

export class StateConfigurationGateway implements StateConfigurationRepository {
  public get(extension: string, key: string) {
    return vscode.workspace.getConfiguration(extension).get(key);
  }

  public async update<T>(extension: string, key: string, value: T) {
    await vscode.workspace.getConfiguration(extension).update(key, value, true);
  }

  public remove(extension: string, key: string): void {
    vscode.workspace.getConfiguration(extension).update(key, null);
  }
}
