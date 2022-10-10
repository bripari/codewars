function sumTwoSmallestNumbers(numbers) {  
    let smallToLarge = numbers.sort((a, b) => (a - b))
    return smallToLarge[0] + smallToLarge[1]
  }