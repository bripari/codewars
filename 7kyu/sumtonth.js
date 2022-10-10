function SeriesSum(n){
    let sum = 0.00
    if (n === 0){
      return '0.00'
    }else if(n === 1){
      return '1.00'
    }else{
      for( let i = 1; i <= n; i++){
        sum = sum + (1/(1+ (3*(i-1))))
        }
      sum = sum.toFixed(2)
      return sum.toString()
    }
  }