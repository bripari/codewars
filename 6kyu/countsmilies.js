function countSmileys(arr) {
    let count = 0
    if(arr.length === 0){
      return 0
    }
    for (i = 0; i < arr.length; i++) {
        if(arr[i].length === 2){
            if((arr[i].charAt(0) === ";" || arr[i].charAt(0) === ":") && (arr[i].charAt(1) === ")" || arr[i].charAt(1) === "D")){
                count++
            }
        }
        if(arr[i].length === 3){
            if( (arr[i].charAt(0) === ";" || arr[i].charAt(0) === ":") && (arr[i].charAt(1) === "-" || arr[i].charAt(1) === "~") && (arr[i].charAt(2) === ")" || arr[i].charAt(2) === "D")){
                count++
            }
        }
    }
    return count
    }