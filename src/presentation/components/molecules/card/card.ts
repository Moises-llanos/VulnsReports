import { INode, IvulnerabilitiesEntity } from "../../../../infrastructure";
import { severity } from "../../../../utils/severity";

const messageDias = (days: number) => {
  return `${days} ${days === 1 ? "día" : "días"}`;
};

const subCards = (nodes: INode[]) => {
  if (!nodes.length) {
    return `
      <div class="card_succes">
        <p class="bold">
          <h4 class="no_margin">No registra vulnerabilidades abiertas</h4>
          <p class="margin-5">Puede ser porque su estado se encuentra 
            <strong class="safe">SAFE</strong> o <strong>PERMANENTEMENTE ACEPTADA</strong>
          </p>
        </div>
      </div>
    `;
  }

  return nodes
    .map(({ severityTemporalScore, where, isNew }) => {
      const tagValue = severity(severityTemporalScore);

      return `
      <div id="card-00" class="sub-card flex align-items-center gap-10">
        ${isNew ? `<div class="sub_new"></div>` : ""}
        <div class="tag ${tagValue.toLowerCase()} bold">${tagValue}</div>
        <p> ${where} </p>
      </div>`;
    })
    .join("");
};

export const card = ({ subVulns, isNew, ...all }: IvulnerabilitiesEntity) => {
  const { title, description, maxOpenSeverityScore, days } = all;

  const valueSeverity = severity(maxOpenSeverityScore);

  return `
      <div id="card">
        <div class="card ${
          isNew ? "new_vul" : ""
        } flex align-items-center justify-content-between gap-10"> 
          <div>
            <div class="flex align-items-center gap-10 card-title">
              <div class="tag ${valueSeverity.toLowerCase()} bold">${valueSeverity}</div>
              <h2>${title}</h2>
            </div>
            <p class="margin-5">${description}</p>
            <div class="alert flex align-items-center gap-10">
            ${isNew ? `<div class="tag high bold">new</div>` : ""}
              
              <p>Ultimo reporte hace <strong class="color-higt">
                ${messageDias(days)}</strong>
              </p>
            </div>
          </div>
          <section class="total_vulns hidden-xs hidden-xxs">${
            subVulns.length
          }</section>
        </div>

        ${subCards(subVulns ?? [])}
         
      </div>
    
    
  `;
};
