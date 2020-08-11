const sayHello = (name, umur, callback1, callback2) => {
  const result = `Hello World ${name} ${umur}`
  callback1(result, "TEST", umur)
  callback2(name)
}

const showGretting = (result) => {
  console.log(result)
  console.log('--------------')
}

const getName = (name) => {
  console.log(name)
}

sayHello("Arkademy", 17, showGretting, getName)