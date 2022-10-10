function XO(str) {
    let arr = str.toLowerCase().split("")
    let xCount = 0
    let oCount = 0
    for(let i = 0; i < arr.length; i++){
    if(arr[i] === "x"){
      xCount += 1
    }if(arr[i] === "o"){
      oCount += 1
    }
  }
    if( xCount === oCount){
      return true
    }else{
      return false
    }
}