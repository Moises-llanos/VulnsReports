import { vulnerabilitiesModel } from "./vulnerabilities.model";

export abstract class VulnerabilitiesRepository {
  abstract get(token: string): Promise<vulnerabilitiesModel>;
}
