function humanReadable (seconds) {
    let HH = Math.floor(seconds/3600).toString().padStart(2,'0')
    let MM = Math.floor((seconds-(HH * 3600))/60).toString().padStart(2,'0')
    let SS = Math.floor(seconds%60).toString().padStart(2,'0')
    return `${HH}:${MM}:${SS}`
  }