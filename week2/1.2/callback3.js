const sortData = (data, callback) => {
  const output = data.sort()
  callback(output, '1')
}
const data = ['Banana', 'Apple', 'Manggo']

sortData(data, (result) => {
  console.log(result)
})
