function moveZeros(arr) {
    return arr.filter(num => num !== 0).concat(arr.filter(num => num === 0))
    }