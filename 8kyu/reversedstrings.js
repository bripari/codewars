function solution(str){
    let splitStr = str.split("")
    console.log(splitStr)
    let reverseArr = splitStr.reverse()
    console.log(reverseArr)
    let reverseJoin = reverseArr.join("")
    return reverseJoin
  }