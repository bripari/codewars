function digitize(n) {
    const num = n
    const numArr = Array.from(String(num), Number)
    numArr.reverse()
    return(numArr)
}