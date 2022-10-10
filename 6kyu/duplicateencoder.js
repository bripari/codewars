function duplicateEncode(word){
    let lcWord = word.toLowerCase()
    let obj ={};
    let arr = []
    for(let s of lcWord)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
    console.log(obj)
    for (let i = 0; i < word.length; i++) {
        if( obj[lcWord[i]] == 1){
            arr.push("(")
        }else{
            arr.push(")")
        }
    }
    return arr.join("")
}