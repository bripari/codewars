const binaryArrayToNumber = arr => {
    const binaryStr = Number(arr.join(''))
    return parseInt(binaryStr, 2)
  };