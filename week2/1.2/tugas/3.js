const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
  let result
  if(typeof(nilaiAwal) !== "number" && typeof(nilaiAkhir) !== "number" && typeof(dataArray) !== "object"){
    result = "Type data harus seuai"
  }else if(nilaiAwal > nilaiAkhir){
    result = "Nilai akhir harus lebih besar dari nilai awal"
  }else if(dataArray.length <= 5){
    result = "data harus lebih dari 5"
  }else{
    output = dataArray.filter((nilai) => {
      return nilai >= nilaiAwal && nilai <= nilaiAkhir
    })
    if(output <= 0){
      result = "Jumlah angka dalam dataArray tidak ada"
    }else{
      result = output.sort((a, b) => a - b)
    }
  }
  callback(result)
}

const callback = (output) => {
  console.log(output)
}

data = [2, 25, 4, 14, 17, 30, 8]

seleksiNilai(2, 20, data, callback)