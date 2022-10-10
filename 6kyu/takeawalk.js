function isValidWalk(walk) {
    let north = []
    let south = []
    let east = []
    let west = []
      walk.forEach(element => {
            if(element === 'n'){
              north.push(element)
            }else if(element === 's'){
              south.push(element)
            }else if(element === 'w'){
                west.push(element)
            }else{
                east.push(element)
            }
        });
            if(north.length === south.length && east.length === west.length && 
               north.length + south.length + east.length + west.length === 10){
                return true
            }
    }