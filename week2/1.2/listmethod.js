const object = {
  methodOne(){
    return object.methodTwo()
  },
  methodTwo(){
    return "DUA"
  }
}

module.exports = object