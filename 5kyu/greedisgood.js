function score( dice ) {
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let six = 0
    for (let i = 0; i < dice.length; i++) {
        if(dice[i] === 1){
            one++
        }else if(dice[i] === 2){
            two++
        }else if(dice[i] === 3){
            three++
        }else if(dice[i] === 4){
            four++
        }else if(dice[i] === 5){
            five++
        }else{
            six++
        }
    }
    let pointTotal = 0
    if(one === 1 || five === 2){
        pointTotal +=100
    }if(five ===1){
        pointTotal +=50
    }if(two === 3 || one === 2){
        pointTotal += 200
    }if(three === 3 || three === 4 || three === 5){
        pointTotal += 300
    }if(four === 3){
        pointTotal += 400
    }if(five ===3){
        pointTotal += 500
    }if(six === 3 || five === 5){
        pointTotal += 600
    }if(one === 3){
        pointTotal +=1000
    }if (one ===4){
        pointTotal += 1100
    }if (one === 5){
        pointTotal += 1200
   }
    return pointTotal
  }