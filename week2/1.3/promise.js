const janji = new Promise((resolve, reject) => {
  const status = 3
  setTimeout(() => {
    if(status === 1){
      resolve("Janji terpenuhi 1")
    }else if(status == 2){
      resolve("Janji terpenuhi 2")
    }else{
      reject("Janji ditolak / error")
    }
  }, 3000);
})

// console.log(janji)
janji.then((response) => {
  console.log("Terpenuhi")
  console.log(response)
}).catch((error) => {
  console.log("Tidak Terpenuhi")
  console.log(error)
})