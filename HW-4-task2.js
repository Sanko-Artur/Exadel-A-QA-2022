// 2.	Create currencyConvertorAsync function. Reimplement the first task with async/await syntax.
// Use a separate *.js file for this task.

async function currencyConvertor(amountOfMoney, currency) {
  try {
    const url =
      'https://api.currencyapi.com/v3/latest?apikey=9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H';
    const money = amountOfMoney;
    const usersCurrency = currency;

    let response = await fetch(url);
    console.log('Request currency...');

    let dataCurrency = await response.json();
    console.log('Prepering currency...');

    let exchangeRate = await dataCurrency.data[usersCurrency].value;
    console.log('Exchange...');

    let resultOfExchanging = await (money * exchangeRate);
    console.log('Done');

    console.log(
      `Exchanging rate: ${exchangeRate}, Result: ${resultOfExchanging} ${usersCurrency}`
    );
  } catch (err) {
    console.log(err);
  }
}

currencyConvertor(40, 'EUR');

currencyConvertor(45, 'AED');

currencyConvertor(25, 'INR');
