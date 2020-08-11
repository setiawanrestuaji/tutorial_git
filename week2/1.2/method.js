// const object = {
//   methodOne: () => {
//     return object.methodTwo()
//   },
//   methodTwo: () => {
//     return "DUA"
//   }
// }
// console.log(object.methodOne())

const { methodOne } = require('./listmethod')
console.log(methodOne())