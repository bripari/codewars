function isIsogram(str){
    let string = str.toLowerCase()
      return !/(.).*\1/.test(string);
  }