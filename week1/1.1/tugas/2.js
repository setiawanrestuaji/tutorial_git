const mtk = 91
const indonesia = 90
const inggris = 89
const ipa = 89
const rataRata = (mtk+indonesia+inggris+ipa)/4
const convertRataRata = parseInt(rataRata.toFixed())
const grade = convertRataRata >= 90 && convertRataRata <= 100 ? 'A' :
              convertRataRata >= 80 && convertRataRata <= 89 ? 'B' :
              convertRataRata >= 70 && convertRataRata <= 79 ? 'C' :
              convertRataRata >= 60 && convertRataRata <= 69 ? 'D' : 'E'
console.log(rataRata)
console.log(convertRataRata)
console.log(grade)