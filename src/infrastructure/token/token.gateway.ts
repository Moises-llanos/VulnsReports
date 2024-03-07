import * as vscode from "vscode";

import { TokenRepository } from "../../domain";
import { NAME_EXTENSION, PROMPT, TOKEN_KEY } from "../../constants/constants";
import { StateConfigurationGateway } from "..";

export class TokenGateway implements TokenRepository {
  private static instanceOff: TokenGateway;
  private static counter: number = 0;

  constructor(private stateConfiguration: StateConfigurationGateway) {
    if (TokenGateway.instanceOff) {
      return TokenGateway.instanceOff;
    }

    TokenGateway.counter++;
    TokenGateway.instanceOff = this;
  }

  async createToken() {
    const prompt = PROMPT;

    const token = await vscode.window.showInputBox({ prompt, password: true });

    await this.stateConfiguration.update(NAME_EXTENSION, TOKEN_KEY, token);
  }

  public get() {
    return this.stateConfiguration.get(NAME_EXTENSION, TOKEN_KEY);
  }

  public removeToken() {
    this.stateConfiguration.remove(NAME_EXTENSION, TOKEN_KEY);
  }
}
