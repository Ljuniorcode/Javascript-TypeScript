//Youtube - Mango
//Revisando conceitos
//Async, Promises, Callbacks, Event Loop - JS

setTimeout(() => {
  console.log('setTimeout data 1ms')
}, 1000)

const promise = new Promise(resolve => {
  resolve('promise data')
})

promise.then(data => console.log(data))


for (let i = 1; i <= 30; i++) {
  console.log(i)
}
