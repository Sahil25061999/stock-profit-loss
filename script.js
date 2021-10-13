const Initial = document.querySelector('.stock-initial-price');
const Current = document.querySelector('.stock-current-price');
const quantity = document.querySelector('.quantity-of-stock');
const calculate = document.querySelector('.calculate');
const displayContainer = document.querySelector('.display-container');
const container = document.querySelector('.container');
const body = document.querySelector('body');

calculate.addEventListener('click', () => {
  let initialPrice = Number(Initial.value);
  let currentPrice = Number(Current.value);
  let quantityNumber = Number(quantity.value);
  if (initialPrice > 0 && currentPrice > 0 && quantityNumber > 0) {
    calculateProfitLoss(initialPrice, currentPrice, quantityNumber);
  } else {
    displayResult();
  }
});

function calculateProfitLoss(initialPrice, currentPrice, quantityNumber) {
  body.style.background = 'rgb(' + 43 + ',' + 151 + ',' + 201 + ')';
  container.style.background = 'rgb(' + 74 + ',' + 182 + ',' + 231 + ')';
  if (initialPrice > currentPrice) {
    let loss = (initialPrice - currentPrice) * quantityNumber;
    let lossPercent = (loss * 100) / initialPrice;
    if (lossPercent >= 50) {
      body.style.background = 'rgb(' + 209 + ',' + 17 + ',' + 17 + ')';
      container.style.background = 'rgb(' + 235 + ',' + 100 + ',' + 100 + ')';
    }

    displayResult(loss, Math.round(lossPercent * 100) / 100, 'loss');
  } else if (currentPrice > initialPrice) {
    let profit = (currentPrice - initialPrice) * quantityNumber;
    let profitPercent = (profit * 100) / initialPrice;
    console.log(profitPercent);
    displayResult(profit, Math.round(profitPercent * 100) / 100, 'profit');
  } else {
    displayResult(0, 0, 'nothing');
  }
}

function displayResult(number, percent, status) {
  switch (status) {
    case 'loss':
      displayContainer.innerText = `The loss is ${number} with a ${percent}% 😔`;
      break;
    case 'profit':
      displayContainer.innerText = `Congrats your profit is ${number} with a ${percent}% 🎷`;
      break;
    case 'nothing':
      displayContainer.innerText = `Your stocks are steady with no profit or loss`;
      break;
    default:
      displayContainer.innerText = `Please enter valid values`;
      break;
  }
}
