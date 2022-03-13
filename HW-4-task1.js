// Create a currency converter using an exchange rate from https://currencyapi.com/.
// A user should be able to pass a currency and amount of money in a function and get the amount of money
// in the desired currency in output. Use “then” syntax to implement the function.

//  currencyConvertor(40, EUR) ⇒ 35 EUR

// API keys: 9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H

function currencyConvertor(amountOfMoney, currency) {
  const url =
    'https://api.currencyapi.com/v3/latest?apikey=9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H';
  const money = amountOfMoney;
  const usersCurrency = currency;
  let exchangeRate;
  let resultOfExchanging;

  return fetch(url)
    .then((response) => {
      console.log('Request currency...');
      return response.json();
    })
    .then((dataCurrency) => {
      console.log('Prepering currency...');
      exchangeRate = dataCurrency.data[usersCurrency].value;
      return exchangeRate;
    })
    .then((exchanging) => {
      console.log('Exchange...');
      resultOfExchanging = money * exchanging;
      console.log('Done');
      return resultOfExchanging;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log(
        `Exchanging rate: ${exchangeRate}, Result: ${resultOfExchanging} ${usersCurrency}`
      );
    });
}

currencyConvertor(40, 'EUR');

currencyConvertor(45, 'AED');

currencyConvertor(25, 'INR');
