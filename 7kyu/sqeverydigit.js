function squareDigits(num){
    let numArr = num.toString().split('');
    let squaredArr = []
    squaredArr = numArr.map(function (a){return a*a;});
    let sqStr = squaredArr.join('')
    return(Number(sqStr))
  }