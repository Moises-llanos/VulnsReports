export interface INode {
  state: string;
  where: string;
  severityTemporalScore: number;
  treatmentStatus: string;
  isNew: boolean;
  reportDate: string;
}

export interface IvulnerabilitiesByIdEntity {
  node: INode;
}

export interface IvulnerabilitiesByIdDataEntity {
  data: {
    finding: {
      vulnerabilitiesConnection: {
        edges: IvulnerabilitiesByIdEntity[];
      };
    };
  };
}

export interface IvulnerabilitiesEntity {
  id: string;
  title: string;
  reportDate: string;
  description: string;
  isNew: boolean;
  maxOpenSeverityScore: number;
  recommendation: string;
  status: string;
  days: number;
  lastVulnerability: number;
  subVulns: INode[];
}

export interface IVulnerabilityDataEntity {
  data: {
    me: { userName: string };
    group: { findings: IvulnerabilitiesEntity[] };
  };
  errors?: [{ message: string }];
}

export interface ICustomFilter
  extends IvulnerabilitiesByIdEntity,
    IvulnerabilitiesEntity {}

export type ITypeFilter = Partial<ICustomFilter>;
