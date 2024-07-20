document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const categorySelect = document.getElementById('category');
    const addIncomeBtn = document.getElementById('add-income');
    const addExpenseBtn = document.getElementById('add-expense');
    const transactionList = document.getElementById('transaction-list');
    const totalIncome = document.getElementById('total-income');
    const totalExpense = document.getElementById('total-expense');
    const netAmount = document.getElementById('net-amount');

    let totalIncome = 0;
    let totalExpense = 0;

    function updateTotals() {
        totalIncome.textContent = `$${totalIncome}`;
        totalExpense.textContent = `$${totalExpense}`;
        netAmount.textContent = `$${totalIncome - totalExpense}`;
    }

    function addTransaction(type) {
        const amount = parseFloat(amountInput.value);
        const category = categorySelect.value;

        if (!amount || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        const transaction = document.createElement('li');
        transaction.innerHTML = `${category} - $${amount} <span>${type}</span>`;
        transactionList.appendChild(transaction);

        if (type === 'Income') {
            totalIncome += amount;
        } else {
            totalExpense += amount;
        }

        updateTotals();
        amountInput.value = '';
        categorySelect.value = 'Food';
    }

    addIncomeBtn.addEventListener('click', () => addTransaction('Income'));
    addExpenseBtn.addEventListener('click', () => addTransaction('Expense'));
});
