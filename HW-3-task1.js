// 1.	There is a JSON file with a price list. All prices there are in dollars. You need to:
// a.	convert all prices to euros (use a static exchange rate).
// b.	add a currency field to the source and output objects
// c.	save both objects into variables and log them into the console.

const exchangeRate = 0.91;

const fs = require('fs');

const priceList = fs.readFileSync('task1-data.json', 'utf8');
const newPriceList = JSON.parse(priceList);
const arrayWithoutKeyData = newPriceList.data;

for (let product in arrayWithoutKeyData) {
  for (let data in arrayWithoutKeyData[product]) {
    if (data === 'Prices') {
      console.log(arrayWithoutKeyData[product][data]);
    }
  }
}

for (let product in arrayWithoutKeyData) {
  product['Prices in euros'] = { a: 'b' };
  for (let data in arrayWithoutKeyData[product]) {
    if (data === 'Prices') {
      for (let price in arrayWithoutKeyData[product][data]) {
        arrayWithoutKeyData[product][data][price] *= exchangeRate;
        arrayWithoutKeyData[product][data][price] += ' €';
      }
    }
  }
}

for (let product in arrayWithoutKeyData) {
  for (let data in arrayWithoutKeyData[product]) {
    if (data === 'Prices') {
      console.log(arrayWithoutKeyData[product][data]);
    }
  }
}

// node ./HW-3-task1
