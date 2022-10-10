function anagrams(word, words) {
    let sortedWords = []
    let result = []
    let indicies = []
    for (let i = 0; i < words.length; i++) {
     sortedWords[i] = words[i].split("").sort().join("")
    }
    for(i=0; i < sortedWords.length; i++){
     if(word.split("").sort().join("") === sortedWords[i]){
       indicies.push(i)
     }
    }
    for(i=0;i<indicies.length; i++){
     result.push(words[indicies[i]])
    }
   return result
   }