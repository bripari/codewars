function DNAStrand(dna){
    let dnaArr = dna.split("")
    for(i = 0; i < dnaArr.length; i++){
      if(dnaArr[i] === "A"){
        dnaArr[i] = "T"
      }else if(dnaArr[i] === "T"){
        dnaArr[i] = "A"
      }else if(dnaArr[i] === "G"){
        dnaArr[i] = "C"
      }else{
        dnaArr[i] = "G"
      }
    }
    return dnaArr.join("")
  }