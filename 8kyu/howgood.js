function betterThanAverage(classPoints, yourPoints) {
    const mean = (classPoints.reduce((a,b) =>a+b))/classPoints.length
    if(mean < yourPoints){
      return true
    }else{
      return false
    }
    }