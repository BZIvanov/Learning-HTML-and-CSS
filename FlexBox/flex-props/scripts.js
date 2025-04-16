function changeFlex(className, targetId) {
  const elements = document.querySelectorAll("." + className);
  const target = document.querySelector("#" + targetId);

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", function () {
      const value = this.value;
      target.setAttribute("class", "flex-container " + value);
    });
  }
}

function changeItemFlex(className, targetId) {
  const elements = document.querySelectorAll("." + className);
  const target = document.querySelector("#" + targetId);

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", function () {
      const value = this.value;
      target.setAttribute("class", "item " + value);
    });
  }
}

function changeFlexBasis(input, targetId) {
  const value = isNaN(input.value) ? 0 : input.value;
  const target = document.querySelector("#" + targetId);
  target.style.flexBasis = value + "%";
}

function changeFlexGrow(input, targetId) {
  const value = isNaN(input.value) ? 0 : input.value;
  const target = document.querySelector("#" + targetId);
  target.style.flexGrow = value;
}

function changeFlexShrink(input, targetId) {
  const value = isNaN(input.value) ? 0 : input.value;
  const target = document.querySelector("#" + targetId);
  target.style.flexShrink = value;
}

function changeFlexOrder(input, targetId) {
  const value = isNaN(input.value) ? 0 : input.value;
  const target = document.querySelector("#" + targetId);
  target.style.order = value;
}

function changeAll(basisInput, growInput, shrinkInput, targetId) {
  changeFlexBasis(basisInput, targetId);
  changeFlexGrow(growInput, targetId);
  changeFlexShrink(shrinkInput, targetId);
}

// Set background color for items with data-color
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  const color = item.getAttribute("data-color");
  if (color) {
    item.style.backgroundColor = "#" + color;
  }
});

// Attach change listeners for flex-order
const flexOrders = document.querySelectorAll(".flex-order");
flexOrders.forEach((el) => {
  el.addEventListener("change", function () {
    changeFlexOrder(this, "order" + this.id);
  });
});

// Attach listeners for flex settings
changeFlex("flex-direction", "direction");
changeFlex("flex-wrap", "wrap");
changeFlex("flex-align-items", "align");
changeFlex("justify-content", "justify");
changeFlex("align-content", "alignContent");
changeItemFlex("align-self", "alignSelf");

// flex-grow listeners
const flexGrows = document.querySelectorAll(".flex-grow");
flexGrows.forEach((el) => {
  el.addEventListener("change", function () {
    changeFlexGrow(this, "item" + this.id);
  });
});

// flex-shrink listeners
const flexShrinks = document.querySelectorAll(".flex-shrink");
flexShrinks.forEach((el) => {
  el.addEventListener("change", function () {
    changeFlexShrink(this, "item" + this.id);
  });
});

// Inputs for items 1 and 2
const item1Inputs = {
  basis: document.querySelector("#B1"),
  grow: document.querySelector("#G1"),
  shrink: document.querySelector("#S1"),
};

const item2Inputs = {
  basis: document.querySelector("#B2"),
  grow: document.querySelector("#G2"),
  shrink: document.querySelector("#S2"),
};

// Change handler for grouped inputs
function bindChangeAll(inputs, itemId) {
  const update = () =>
    changeAll(inputs.basis, inputs.grow, inputs.shrink, itemId);
  inputs.basis.addEventListener("change", update);
  inputs.grow.addEventListener("change", update);
  inputs.shrink.addEventListener("change", update);
}

bindChangeAll(item1Inputs, "item1");
bindChangeAll(item2Inputs, "item2");
