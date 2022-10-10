function solution(str){
    if(str == ""){
      return []
    }
    let arr= str.split("")
    if(arr.length % 2 === 1){
      arr.push("_")
    }
    let str2=arr.join("")
    let result = str2.replace(/.{2}/g, '$& ');
    return result.trim().split(" ")
    
  }