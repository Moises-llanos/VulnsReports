export const queryByStatus = () => {
  return `{
    me {userName},
    group(groupName: "asakusa"){
      findings {
        id,
        title,
        status,
        recommendation,
        reportDate,
        maxOpenSeverityScore,
        description,
        lastVulnerability
      }
    }
  }`;
};

export const queryById = (id: string) => {
  return `{
    finding(identifier: "${id}"){
      vulnerabilitiesConnection {
        edges {
          node {
            state,
            where,
            severityTemporalScore,
            treatmentStatus,
            reportDate
          }
        }
      }
    }
  }`;
};
