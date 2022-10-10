function highAndLow(numbers){
    let arr = numbers.split(" ").map(Number).sort((a,b) => a-b)
    let high = Math.max(...arr)
    let low = Math.min(...arr)
    return `${high} ${low}`
  }