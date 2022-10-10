const order = words => {
    if(words.length === 0){
      return ""
    }
    let wordArr = words.split(" ")
    let sortedArr = []
    for (let index = 0; index <= wordArr.length; index++) {
    const match = wordArr.find(element => {
        if (element.includes(index)) {
          sortedArr.push(element);
        }
      });

    
    }
     return sortedArr.join(" ")
}