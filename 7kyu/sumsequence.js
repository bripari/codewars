const sequenceSum = (begin, end, step) => {
    let total = 0
    if (end < begin){
      return 0
    }else if (begin === end){
      return begin
    }else{
      for(i = begin; i <= end; i+=step){
        total += i
      }
      return total
    }
   
  };