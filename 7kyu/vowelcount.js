const vowels = ['a', 'e', 'i', 'o', 'u']
function getCount(str) {
  let vowelsCount = 0;
  for ( let letter of str){
    if (vowels.includes(letter)) {
      vowelsCount++
    }
  }
  return vowelsCount;
}