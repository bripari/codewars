function countSheeps(arrayOfSheep) {
    let numOfSheep = 0
  arrayOfSheep.forEach(element => {
    if(element === true){
      numOfSheep += 1
    }
  })
  return numOfSheep
  }