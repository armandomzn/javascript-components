import { getElement } from "./getElement.js";

export const showLoading = () => {
  getElement(".loading-parent").classList.remove("hide-loading");
};
export const hideLoading = () => {
  getElement(".loading-parent").classList.add("hide-loading");
};
