function openOrSenior(data){
    for (let i=0; i < data.length; i++){
      if (data[i][0] >= 55 && data[i][1] > 7){
        data.splice(i,1,"Senior")
      }else{
        data.splice(i,1,"Open")
      }
    }
    return data
  }