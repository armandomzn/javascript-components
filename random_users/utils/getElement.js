export const getElement = (element) => {
  const selection = document.querySelector(element);
  if (selection) {
    return selection;
  }
  throw new Error(`The element: ${element} does not exist`);
};
