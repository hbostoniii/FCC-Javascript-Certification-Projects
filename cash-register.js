const REGISTER_STATUS = {closed: 'CLOSED', insufficientFunds: 'INSUFFICIENT_FUNDS', open: 'OPEN'};

function checkCashRegister(price, cash, cid) {
let cashRegister = {status: ``, change: cid};
const changeNeeded = parseFloat(cash - price).toFixed(2);
const changeAvailable = getRegisterChange(cid);

cashRegister.status = getCashRegisterStatus(changeNeeded,changeAvailable);


if(cashRegister.status === REGISTER_STATUS.insufficientFunds) {
    cashRegister.change = [];
    return cashRegister
}

cashRegister.change = getCustomerChange(changeNeeded, cid);


if (changeNeeded > getRegisterChange(cashRegister.change)) {
    cashRegister.status = REGISTER_STATUS.insufficientFunds;
    cashRegister.change = [];
}

if(cashRegister.status === REGISTER_STATUS.closed) {
    cashRegister.change = [...cid];
}

return cashRegister;
}

function getCustomerChange(changeNeeded,cid) {
    const change = [];
    const currencyDictionary = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    };

    for (let i = cid.length - 1; i >=0; i--) {
        const coinName = cid[i][0];
        const coinTotal = cid[i][1];
        const coinValue = currencyDictionary[coinName];
        let coinAmmount = (coinTotal / coinValue).toFixed(2);
        let coinsToReturn = 0;

        while(changeNeeded >= coinValue && coinAmmount > 0) {
            changeNeeded -= coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            coinAmmount--;
            coinsToReturn++;
        }

        if(coinsToReturn > 0) {
            change.push([coinName, coinsToReturn * coinValue]);
        }
    }

    return change
}

function getCashRegisterStatus(changeNeeded,changeAvailable) {

if (Number(changeNeeded) > Number(changeAvailable)) {
    return REGISTER_STATUS.insufficientFunds;
}

if (Number(changeNeeded) < Number(changeAvailable)) {
    return REGISTER_STATUS.open;
}
    return REGISTER_STATUS.closed;

}

function getRegisterChange(changeInDrawer) {    
    let total = 0;

    for (const change of changeInDrawer) {
        let changeValue = change[1]
        total += changeValue
    }

    return total.toFixed(2)
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));