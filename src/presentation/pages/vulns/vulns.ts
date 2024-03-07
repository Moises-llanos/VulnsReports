import { vulnerabilitiesModel } from "../../../domain";
import { card } from "../../components/molecules";

export const createPageVulns = ({ user, vulns }: vulnerabilitiesModel) => {
  return `
        <div class="flex align-items-center gap-10 title_first flex-wrap">
          <h1 class="no_margin">Vulnerabilidades Activas - </h1>
          <div class="tag vulnerable"> Vulnerables</div>
          
        </div>
        <h2 class="no_margin">Hola, ${user.split(" ")[0]}</h2>
        <div class="divider"></div>
        <div class="flex align-items-center gap-10 justify-content-between flex-wrap p-right-15">
          <div class="flex align-items-center gap-10">
            <h2>Vulnerabilidades nuevas reportadas - </h3>
            <div class="tag high bold">${
              vulns.filter(({ isNew }) => isNew).length
            }</div>
          </div>
          <h3>Total vulnerabilidades - ${vulns.reduce(
            (acum, { subVulns }) => acum + subVulns.length,
            0
          )}</h5>
        </div>

        ${vulns
          .map(
            (data, index) => `
            <div class="flex gap-10 width-100">
              <h2> ${index + 1} </h2>
              <div class="width-100">
                ${card({ ...data })}
              </div>
            </div>
        `
          )
          .join("")}
    `;
};
