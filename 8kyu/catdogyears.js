function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 24
    let dogYears = 24
      if(humanYears === 1){
      return [1, 15, 15]
      }else if(humanYears === 2){
      return [2, 24, 24]  
      }else{
        catYears += (humanYears-2)*4
        dogYears += (humanYears-2)*5
        
      }
      return [humanYears, catYears, dogYears]
      
    }