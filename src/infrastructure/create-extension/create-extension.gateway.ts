import {
  CreateWebviewPanelGateway,
  StateConfigurationGateway,
  RegisterCommandGateway,
  TokenGateway,
} from "..";

import { createPageVulns } from "../../presentation/pages/vulns/vulns";
import { VulnerabilitisGateway } from "../vulnerabilities/vulnerabilities.gateway";
import * as vscode from "vscode";

const state = new StateConfigurationGateway();

export class CreateExtensionGateway {
  private vulnerabilitisGateway = new VulnerabilitisGateway();
  private registerCommand = new RegisterCommandGateway();
  private webview = new CreateWebviewPanelGateway();
  private tokenGateway = new TokenGateway(state);

  public create() {
    return this.registerCommand.register(() => this.validateRenderTemplate());
  }

  private async validateRenderTemplate() {
    try {
      if (!this.token) {
        await this.tokenGateway.createToken();
        vscode.window.showInformationMessage("token registered successfully");
        return;
      }

      const data = await this.vulnerabilitisGateway.get(this.token);
      this.webview.create(createPageVulns(data));
    } catch (error) {
      const custom = error as { message: string };
      vscode.window.showErrorMessage(custom?.message ?? "Error desconocido");
    }
  }

  get token() {
    return this.tokenGateway.get() as string;
  }
}
