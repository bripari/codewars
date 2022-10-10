var number = function(busStops){
    let result = busStops.reduce((a, [b, c]) => a+b-c, 0);
    return result
  }