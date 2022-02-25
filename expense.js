'use strict'

// Methods: addExpense, addIncome, getAccountSummary and my (optional) methods
const account = {
    name: 'Ogunola Happiness Ayomide',
    age: 20,
    address: 'Engineer, Mando, Kaduna, Kaduna State',
    expenses: [],
    income: [],

    addExpense: function(description, amount){
        // Adding New Expenses To The expenses Array
        this.expenses.push({
            description: description,
            amount: amount
        });
       
    },

    addIncome: function(description, amount){
        // Adding New Income To The Income Array
        this.income.push({
            description: description,
            amount: amount
        });
        
    },

    getAccountSummary: function(){
         // Looping through the array of expense to get the (item, index) to calculate the total amounts. [here item=expense]
         let totalExpenses = 0;
         this.expenses.forEach(function(expense){
             totalExpenses += expense.amount;
         });

         // Also Looping through the array of income to get the (item, index) to calculate the total amounts. [here item=income]
        let totalIncome = 0;
        this.income.forEach(function(expense){
            totalIncome += expense.amount
        })

        return `Thus so far in the month ${this.name} has a total income of: $${totalIncome}, and total expense of ${totalExpenses}. And His account balance = $${totalIncome -totalExpenses}`;
    },
    getStatementOfAccount: function(){
        return {
            Expenses: this.expenses,
            Income: this.income
        }
    }
}




// Creating a replica of the account by object destructuring

const user_1 = {account}

function userOneInstance(account, name='___', age='___', address='____'){
    account.name = name,
    account.age = age,
    account.address = address,
    account.addExpense('Buying Mac Book Pro', 3000);
    account.addExpense('Buying Cofee', 450000);
    account.addIncome('Depositing $500 for course purchase online', 4000);
    account.addIncome('Quick Deposit', 2000)
    const getNow = account.getAccountSummary();
    console.log(getNow)
    const getS = account.getStatementOfAccount();
    console.log(getS)
}

userOneInstance(account);