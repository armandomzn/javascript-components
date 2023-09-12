import { getElement } from "./getElement.js";

const loading = getElement(".loading-parent");
export const showLoading = () => {
  loading.classList.remove("hide-loading");
};

export const hideLoading = () => {
  loading.classList.add("show-loading");
};
