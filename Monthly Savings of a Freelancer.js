function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    let sum = 0;
    for (let i of arr) {
      if (i >= 3000) {
        i = i - i * 0.2;
      }
      sum += i;
    }
    let savings=sum-livingCost;
    if(savings>=0){
        return savings;
    }
    else if(savings<=0){
        return 'earn more';
    }
  
  }
}
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
