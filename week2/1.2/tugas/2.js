const search = (key, limit, data, callback) => {
  const outputSearch = data.filter((name) => {
    return name.toLowerCase().includes(key.toLowerCase())
  })
  const outputLimit = outputSearch.slice(0, limit)
  callback(outputLimit)
}

const callback = (output) => {
  if(output.length === 0){
    console.log("Not found")
  }else{
    console.log(output)
  }
}

const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"]

search('An', 3, name, callback)
  