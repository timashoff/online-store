function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#f60', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#f60', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#f60', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#f60', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSliderPrice = document.querySelector('.fromSliderPrice');
const toSliderPrice = document.querySelector('.toSliderPrice');
const fromInputPrice = document.querySelector('.fromInputPrice');
const toInputPrice = document.querySelector('.toInputPrice');

const fromSliderStock = document.querySelector('.fromSliderStock');
const toSliderStock = document.querySelector('.toSliderStock');
const fromInputStock = document.querySelector('.fromInputStock');
const toInputStock = document.querySelector('.toInputStock');

fillSlider(fromSliderPrice, toSliderPrice, '#C6C6C6', '#f60', toSliderPrice);
setToggleAccessible(toSliderPrice);

fillSlider(fromSliderStock, toSliderStock, '#C6C6C6', '#f60', toSliderStock);
setToggleAccessible(toSliderStock);

fromSliderPrice.oninput = () => controlFromSlider(fromSliderPrice, toSliderPrice, fromInputPrice);
toSliderPrice.oninput = () => controlToSlider(fromSliderPrice, toSliderPrice, toInputPrice);
fromInputPrice.oninput = () => controlFromInput(fromSliderPrice, fromInputPrice, toInputPrice, toSliderPrice);
toInputPrice.oninput = () => controlToInput(toSliderPrice, fromInputPrice, toInputPrice, toSliderPrice);

fromSliderStock.oninput = () => controlFromSlider(fromSliderStock, toSliderStock, fromInputStock);
toSliderStock.oninput = () => controlToSlider(fromSliderStock, toSliderStock, toInputStock);
fromInputStock.oninput = () => controlFromInput(fromSliderStock, fromInputStock, toInputStock, toSliderStock);
toInputStock.oninput = () => controlToInput(toSliderStock, fromInputStock, toInputStock, toSliderStock);