const array = ["Udin", "Budi"]

const tambahData = (nama, callback) => {
  setTimeout(() => {
    array.push(nama)
    callback(array)
  }, 3000);
}

const pertama = () => {
  console.log('Pertama', array)
}

const kedua = (data) => {
  console.log('Kedua', data)
}

const ketiga = () => {
  console.log('Ketiga', array)
}

pertama()
tambahData("Iwan", kedua)
ketiga()