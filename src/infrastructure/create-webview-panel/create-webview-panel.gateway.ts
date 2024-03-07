import * as vscode from "vscode";

import { CreateWebviewPanelRepository } from "../../domain";
import { template } from "../../presentation/components/templates";
import { ID_EXTENSION, ONE_SCREEN, TITLE } from "../../constants/constants";

let currentPanel: vscode.WebviewPanel | undefined;

export class CreateWebviewPanelGateway implements CreateWebviewPanelRepository {
  async create(content: string) {
    currentPanel && currentPanel.dispose();

    currentPanel = vscode.window.createWebviewPanel(
      ID_EXTENSION,
      TITLE,
      ONE_SCREEN,
      {}
    );

    currentPanel.webview.html = template(content);

    currentPanel.onDidDispose(() => (currentPanel = undefined));
  }
}
