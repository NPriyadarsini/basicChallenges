const accounts = [
  {
    name: 'Babu',
    accountNo: 2,
  },
  {
    name: 'Chandra',
    accountNo: 3,
  },
  {
    name: 'Arun',
    accountNo: 1,
  },
];
const balances = {
  //accountNo: balance
  '1': 5000,
  '2': 2000,
  '3': 0,
};
const transactions = [
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 1,
    type: 'deposit',
    amount: 500,
  },
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 2,
    type: 'deposit',
    amount: 300,
  },
  {
    accountNo: 2,
    type: 'withdrawal',
    amount: 200,
  },
  {
    accountNo: 2,
    type: 'deposit',
    amount: 200,
  },
];
const updateBalancesWithTransactions = () => {
  // Implement transaction code here.
  for (let i = 0; i < transactions.length; i++) {
    const {accountNo,type,amount} = transactions[i];
    if (type == 'withdrawal') {
      balances[accountNo] -= amount;
    } else {
      balances[accountNo] += amount;
    }
  }
};
const getBalance = (item) => ({
    name: item.name,
    accountNo: item.accountNo,
    balances: balances[item.accountNo]
});
const displayBalances = () =>   console.table(accounts.map(getBalance));

// Do not change below this line.
const main = () => {
  console.log('Balances before transactions');
  displayBalances();
  updateBalancesWithTransactions();
  console.log('Balances after transactions');
  displayBalances();
};
main();
