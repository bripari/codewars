function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq)) == true){
      for(i = sq+1; ;i++){
      if(Number.isInteger(Math.sqrt(i)) == true){
        return i
        break
      }
    }
      }else{return -1}
  }