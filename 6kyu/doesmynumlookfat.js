function narcissistic(value) {
    if(value < 10){ return true}
    let arr = value.toString().split("")
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i],arr.length)
      }
    if(arr.reduce((a,b) => a+b) === value){
    return true
    }else{
      return false
    }
  }