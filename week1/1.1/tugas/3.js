const printSegitiga = 10
if(typeof printSegitiga === 'number'){
  for (let a = printSegitiga; a >= 1; a--) {
    let result = ''
    for (let b = 1; b <= a; b++) {
        result += b
    }
    console.log(result)
  } 
}