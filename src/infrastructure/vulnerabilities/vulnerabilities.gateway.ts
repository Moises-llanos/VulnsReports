import {
  IvulnerabilitiesByIdDataEntity,
  IVulnerabilityDataEntity,
  IvulnerabilitiesEntity,
  HttpClientGateway,
} from "..";

import { ACCEPTED_UNDEFINED, VULNERABLE } from "../../constants/constants";
import { queryById, queryByStatus } from "../../utils/querys";
import { VulnerabilitiesRepository } from "../../domain";
import { INode } from "./vulnerabilities.entity";
import { formatDateAgo } from "../../utils/formate-date";

type IResponseById = IvulnerabilitiesByIdDataEntity;
const API = "https://app.fluidattacks.com/api";
type IResponse = IVulnerabilityDataEntity;
type IEntitys = IvulnerabilitiesEntity;

export class VulnerabilitisGateway implements VulnerabilitiesRepository {
  private readonly _http = new HttpClientGateway();

  private getHeaders(token: string) {
    const authorization = `Bearer ${token}`;
    return { "content-type": "application/json", authorization };
  }

  async get(token: string) {
    const body = JSON.stringify({ query: queryByStatus() });
    const headers = this.getHeaders(token);
    const config = { headers, body };

    const { data, errors } = await this._http.post<IResponse>(API, config);

    if (errors) {
      throw Error(errors[0].message);
    }

    const vulns = await this.getVulnsByStatus(data.group.findings, token);
    return { user: data.me.userName, vulns };
  }

  async getVulnsById(id: string, token: string) {
    const body = JSON.stringify({ query: queryById(id) });
    const headers = this.getHeaders(token);

    const result = await this._http.post<IResponseById>(API, { body, headers });
    const vulns = result.data.finding.vulnerabilitiesConnection.edges;
    return vulns.map(({ node }) => node);
  }

  private getVulnsByTreatment(nodes: INode[]) {
    const results = nodes
      .filter(({ state, treatmentStatus }) => {
        return state === VULNERABLE && treatmentStatus !== ACCEPTED_UNDEFINED;
      })
      .map((node) => ({ ...node, isNew: formatDateAgo(node.reportDate) <= 7 }));

    return results.sort(({ isNew: a }, b) => (a === b.isNew ? 0 : a ? -1 : 1));
  }

  private async getVulnsByStatus(vulns: IEntitys[], token: string) {
    const list = vulns.filter(({ status }) => status === VULNERABLE);
    let mapping: IEntitys[] = [];

    for (const vuln of list) {
      const days = vuln.lastVulnerability;
      const nodes = await this.getVulnsById(vuln.id, token);
      const subVulns = this.getVulnsByTreatment(nodes);
      mapping.push({ ...vuln, days, isNew: days <= 7, subVulns });
    }

    return mapping.sort(({ isNew: a }, b) => (a === b.isNew ? 0 : a ? -1 : 1));
  }
}
