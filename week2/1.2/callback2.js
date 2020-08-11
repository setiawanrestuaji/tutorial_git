const sortData = (type, ch, data, callback) => {
  if(type === 'asc'){
    const output = data.sort()
    callback(output)
  }
}

const getResult = (result) => {
  console.log(result)
}

const data = ['Banana', 'Apple', 'Manggo']

sortData('asc', 'check', data, getResult)