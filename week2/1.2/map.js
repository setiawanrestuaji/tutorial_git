const array = ["Udin", "Budi", "Hendra", "Zaki"]

//1
const map = array.map(a => a)

//2
const map = array.map((a, index) => index)

// //3
const map = array.map(a => {
  const result = `Ini adalah ${a}`
  return result
})

// //4
const map = array.map((a, index) => {
  return a
})

console.log(map)