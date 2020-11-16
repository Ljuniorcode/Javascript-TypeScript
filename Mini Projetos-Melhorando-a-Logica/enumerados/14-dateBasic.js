const data1 = new Date()
console.log(data1)

const data2 = new Date('November 16 2020 15:51')
console.log(data2)

let diaMesAno = new Date()
console.log(diaMesAno.toLocaleString())

//ano atual
let anoAtual = new Date()
console.log(anoAtual.getFullYear())

let m = new Date();
let mesAtual = m.getMonth()
console.log(mesAtual)

//dia da semana
let d = new Date();
let novoValor = d.getDay()
console.log(novoValor)
//obs: os dias da semana vão de 0 a 6, sendo que 0 é domingo


//exibe o dia do mês
let diaDoMes = new Date();
let diames = diaDoMes.getDate()
console.log(diames)


// getHours() - exibe a hora atual
// ```
// let d = new Date();
// let novoValor = d.getHours()
// console.log(novoValor)
// ```

// getMinutes() - exibe os minutos
// ```
// let d = new Date();
// let novoValor = d.getMinutes()
// console.log(novoValor)
// ```

// getSeconds() - exibe os segundos
// ```
// let d = new Date();
// let novoValor = d.getSeconds()
// console.log(novoValor)
// ```

// getMilliseconds() - exibe os milissegundos
// ```
// let d = new Date();
// let novoValor = d.getMilliseconds()
// console.log(novoValor)
// ```

// Secondos atuais desde 1970
// ```
// let d = new Date();
// let novoValor = d.getTime()
// console.log(novoValor)
// ```

// Secondos atuais desde 1970
// ```
// let novoValor = Date.now()
// console.log(novoValor)
// ```