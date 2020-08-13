// ES5
// function doStuff(){
//   return "HELLO"
// }
//ES6
// const doStuff = () => {
//   console.log("HELLO")
// }
// doStuff()

const array = [
  {
    id: 1,
    name: 'Budi'
  },
  {
    id: 2,
    name: 'Zaki'
  },
  {
    id: 3,
    name: 'Firman'
  }
]

const map = array.map(item => {
  if(item.name === "Firman"){
    return item
  }else{
    return '-'
  }
})

const filter = array.filter(item => {
  return item.name === "Firman"
})

console.log(map)
console.log(filter)