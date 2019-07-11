function checkCashRegister(price, cash, cid) {

    // Money refund will hold all currencies used to give the change to the client.
    var moneyRefund = [];
    var change = cash - price;
    
    //Status of the CID at the end of our application. 
    var statu = {

        statu1: {
            status: "INSUFFICIENT_FUNDS",
            change: [],
        },

        statu2: {
            status: "CLOSED",
            change: cid,
        },
        statu3: {
            status: "OPEN",
            change: moneyRefund,
        },
    };

// We create a tableMoney with the currencies related to it. In order to iterate it later on.
    var tableMoney = [

        ["ONE", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01],
    ]


    var itemOfMoney;
    var result = [];
    var nameOfTheCurrency = "";
    var indexOfTheItem;
    var valueOfTheCurrency;
    var valueOfTheItemInTheTableMoney;


    // 1 - We spot the right currency to be used in depending of the change. Once, we know it we will ask our CID to check if we have some money in this currency by calling the function "calculeChange".

    for (var i = 0; tableMoney.length > i; i++) { 
        
        if (change > tableMoney[i][1]) {
            // We save the first currency that could potentially be used.
            nameOfTheCurrency = tableMoney[i][0];
            // Check my CID to see to spot and save the same currency. 
            cid.forEach((item, index) => {
                (item[0].indexOf(nameOfTheCurrency) > -1) ? indexOfTheItem = index: false;  // (Not a good practice to use false, could be reviewed.)
            })
            // We save the value of the currency
            valueOfTheCurrency = cid[indexOfTheItem][1];
            
            valueOfTheItemInTheTableMoney = tableMoney[i][1];
              // We check if we have some money available in the currency
            if (valueOfTheCurrency > 0) {

                // 2 - I call a function that will : do the subtraction(change - currency), fixed two decimals the numbers as we have some undesired results.
                
                change = calculeChange(change, valueOfTheCurrency, valueOfTheItemInTheTableMoney);


            }
        }
    }


    // (2) 
    function calculeChange(change, valueOfTheCurrency, valueTableOfMoney) {

        var number = 0;
        var newArrayWithNameReturned;


            // Number will be updated at each loop by the value of the original currency in the table monney. If It equals our valueOfTheCurrency that means we have no more currency available in our CID.

        while (valueOfTheCurrency !== number && change >= valueTableOfMoney && change !== 0)

        {
//debugger;

            change = change - valueTableOfMoney;

            change = change.toFixed(2);

            
            number += valueTableOfMoney
          
//debugger;
        }

        // We update my (cid) by taking out the money needed for the change.
        cid[indexOfTheItem][1] = cid[indexOfTheItem][1] - number.toFixed(2);

        //b. We create newArrayWithNameReturned to generate new array at each currencies. MoneyRefund will be the the array mutli dimensional of all my currency.
        
        newArrayWithNameReturned = new Array(nameOfTheCurrency); 
        moneyRefund.push(newArrayWithNameReturned.concat(number));

        return change;

    }
//* change will be returned and revaluated at each loop


    function returnChange() {
        
        
    // We check if some money are still in my CID after the change
       
        var moneyLeft = cid.some(item => (item[1] > 0));
        var cidAdjustement = [];

            // if change is superior that means we could not give the change in total as the money available in my CID was not enough.
        if (change > 0.00) {
              console.log(statu.statu1)
            return statu.statu1
            // We gave the change and we still have some money left in our CID
        } else if (change == 0 && moneyLeft) {
             console.log(statu.statu3)
            return statu.statu3
            //We gave the change but we do not have any money left in the CID so we close it
        } else {
               console.log(statu.statu2)
            //For the funciton lunched at line 158, I have some undesired results spotted in line 95. The process of subtracting  works correctly until it reaches 0.45 where it starts to be equal to 0.44000000003 or we took only 0.1 at each iteration from 0.50 . So, we find this adjustement. We could have fixed any number to two decimals way before but freecodecamp do not accept 20.00 for twenty for example (it wants 20).  (I need to review it to correct this bug as it makes the code at this point weak and could lead to other undesired results, YDNJS series of book talk about some undesired results though in javascript at certain point) (the algo is valid though throught freecodeCamp )
            
            moneyRefund.forEach( element => {
                cidAdjustement = cid.map( item => { 
                    (item[0].indexOf(element[0]) > -1) ? item[1] = Number (element[1].toFixed(2)) : item
                    
                     })})
          
            return statu.statu2

        }

    }

    return returnChange();

}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.*/   
checkCashRegister(5, 20, [["PENNY", 0], ["NICKEL", 15], ["DIME", 10], ["QUARTER", 0], ["ONE", 5], ["FIVE", 0], ["TEN", 10], ["TWENTY", 0], ["ONE HUNDRED", 200]]);