const array = ["Udin", "Budi", "Hendra", "Zaki"]

// const filter = array.filter((item) => {
//   return item.toLowerCase().includes("bu")
// })

// console.log(filter)

// const text = "Setiawan"
// const includes = text.includes("ani")
// console.log(includes)

const map = array.map((a) => {
  const b = `Nama ${a}`
  return b
})

console.log(map)