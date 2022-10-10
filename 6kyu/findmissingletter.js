function findMissingLetter(array){
    let str = array.join()
    let arr= []
    for (let i = 0; i < str.length; i++) {
        if(i % 2 === 0){
            arr.push(str.charCodeAt(i));
            }
        }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] + 1 !== arr[i+1]){
            return String.fromCharCode(arr[i] + 1)
        }   
    }
}