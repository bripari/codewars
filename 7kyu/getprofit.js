const minMax = arr => {
    let sortedArr = arr.sort((a,b)=>a-b)
    let lowHigh = []
      lowHigh.push(sortedArr[0])
      lowHigh.push(sortedArr[arr.length-1])
    return lowHigh
    }