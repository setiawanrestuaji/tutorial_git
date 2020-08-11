const biodata = {
  name: 'Budi',
  hobby: 'Futsal',
  address: 'Jakarta',
  school: [
    {
      name: 'SMP 1',
      jurusan: null
    },
    {
      name: 'SMA 1',
      jurusan: 'IPA'
    }
  ]
}
// const rgb = [255, 100, 0]
// const { name, hobby } = biodata
// console.log(name)
// console.log(hobby)
// const [ merah, green ] = rgb
// console.log(merah)
// console.log(green)

const { school } = biodata
const [ index0, index1 ] = school
// const { name } = index1

console.log(index0.name)
console.log(index1.name)