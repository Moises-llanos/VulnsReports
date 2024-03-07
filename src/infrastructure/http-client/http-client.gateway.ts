import { HttpClientRepository } from "../../domain";

export class HttpClientGateway implements HttpClientRepository {
  async post<T>(url: string, config: object): Promise<T> {
    return (
      await fetch(url, { method: "POST", ...config })
    ).json() as Promise<T>;
  }
}
