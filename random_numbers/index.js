const items = [...document.querySelectorAll(".number")];

const updateValue = (element) => {
  const value = parseInt(element.dataset.value);
  const amount = Math.ceil(value / 1000);
  let counterValue = 0;
  const intervalCounter = setInterval(() => {
    counterValue += amount;
    element.textContent = `${counterValue}+`;
    if (counterValue > value) {
      element.textContent = `${value}+`;
      clearInterval(intervalCounter);
      return;
    }
  }, 1);
};

items.forEach((item) => {
  updateValue(item);
});
