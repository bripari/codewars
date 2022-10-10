function abbrevName(name){
    let arr = name.split(" ")
    let arr2 = []
   for(i = 0; i < arr.length; i++){
     arr2.push(arr[i].charAt(0))
   }
    return arr2.join(".").toUpperCase()
  
  }