document.getElementById('calculate-btn').addEventListener('click', function(){
    
    // ? total cost 
    const foodCost = getInputById('food-field');
    const rentCost = getInputById('rent-field');
    const clothesCost = getInputById('clothes-field');
    const inCome = getInputById('income-field');
    if((isNaN(foodCost) || foodCost < 0) || (isNaN(rentCost) || rentCost < 0) || (isNaN(clothesCost) || clothesCost < 0) || (isNaN(inCome) || inCome < 0)){
        alert('enter valid number');
        return;
    }
    const totalCost = foodCost + rentCost + clothesCost;
    if(totalCost > inCome){
        alert(' ইনকাম এর চাইতে বেশি খরচ করা যাবে না');
        return;
    }
    // ? set total expenses
    const previousExpenses = document.getElementById('total-expense');
    // setElementById('total-expense', totalCost);
    previousExpenses.innerText = totalCost;
    
    // ? balance
    const totalBalance = inCome - totalCost;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalance;
})

document.getElementById('save-btn').addEventListener('click', function(){
    const inCome = getInputById('income-field');
    if(isNaN(inCome) || inCome < 0){
        alert('enter number')
        return
    }
    const saving = getInputById('save-field');
    saving.value = '';
    if(isNaN(saving) || saving >= 100 || saving < 0){
        alert('enter valid number');
        return;
    }
    
    const percentage = inCome * (saving / 100); 

    const balance = getElementById('balance');
    if(percentage > balance){
        alert('তোমার balance এর চাইতে বেশি সেইভ করতে পারবে না।');
        return;
    }
    const savingAmount = document.getElementById('saving-amount-field');
    savingAmount.innerText = percentage;

    const savingAmountNumber = getElementById('saving-amount-field');

    
    const remainingBalance = balance - savingAmountNumber;

    const remaining = document.getElementById('remaining-field');
    remaining.innerText = remainingBalance;

})