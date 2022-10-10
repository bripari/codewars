function tankvol(h, d, vt) {
    let r = d/2
    let area = Math.acos((r-h)/r)*Math.pow(r,2) - ((r-h)*Math.sqrt((2*r*h) - Math.pow(h,2)))
    let totalArea = Math.PI * Math.pow(r,2)
    let length = vt / totalArea
    return Math.floor(area * length)
    }