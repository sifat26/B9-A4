

function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return 'Invalid Number';
    }
    else{
        let result=(ticketSale*120)-(500+(8*50));
        return result;
    }
    }
    console.log(calculateMoney(1055));