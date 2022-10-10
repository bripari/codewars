function printerError(s) {
    let errors = 0
    for(let i = 0; i < s.length; i++){
      if (s.charAt(i) === 'n' || s.charAt(i) ===  'o' || s.charAt(i) ===  'p' || s.charAt(i) ===  'q' || s.charAt(i) ===  'r' || s.charAt(i) === 's' || s.charAt(i) ===  't' || s.charAt(i) ===  'u' || s.charAt(i) ===  'v' || s.charAt(i) ===  'w' || s.charAt(i) ===  'x' || s.charAt(i) ===  'y' || s.charAt(i) ===  'z'){
        errors += 1
      }
    
    
     }
       return `${errors}/${s.length}`
  
  }