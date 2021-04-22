/*
Problem
  -input: number (id) and list of objects (inventory)
  -output: boolean
- return boolean indicating whether the sum of quantities for the given
id is positive or negative

Algorithm
1. assign all of the id's transaction to a new variable
2. initialise a sum variable equal to zero
3. take the first entry from the id's transactions
4. if it's movement property is equal to in, add it to sum, otherwise
subtract it
5. repeat 3-4 for all the transactions for the input id
6. return whether sum is greater than 0
*/

function transactionsFor(id, transactions) {
  return transactions.filter(inventoryItem => inventoryItem.id === id);
}

function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  let sumQuantity = 0;

  itemTransactions.forEach(entry => {
    sumQuantity += (entry.movement === 'in' ? entry.quantity : -entry.quantity);
  });

  return sumQuantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true