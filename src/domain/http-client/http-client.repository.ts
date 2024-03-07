export abstract class HttpClientRepository {
  abstract post<T>(url: string, config: object): Promise<T>;
}
