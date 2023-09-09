import { displayUser } from "./utils/displayUser.js";
import { fetchRandomUser } from "./utils/fetchRandomUser.js";
import { getElement } from "./utils/getElement.js";
const btn = getElement(".btn");

const showUser = async () => {
  // fetch random user
  const user = await fetchRandomUser();
  // display user in dom
  displayUser(user);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
