function expandedForm(num) {
    let arr = num.toString().split("")
    let zeros = arr.length-1
    let acc = "0"
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
         if(arr[i] !== "0"){
             arr2.push( `${arr[i]}`+ `${acc.repeat(zeros-i)}`) 
         }
     }
     return arr2.join(" + ")
  }