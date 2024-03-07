import { IvulnerabilitiesEntity } from "../../infrastructure";

export interface vulnerabilitiesModel {
  user: string;
  vulns: IvulnerabilitiesEntity[];
}
