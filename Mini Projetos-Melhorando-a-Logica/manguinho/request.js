// const request = require('request')
const axios = require('axios')
const gitHubApi = 'https://api.github.com/users/Ljuniorcode/repos'

//usando request
// request(gitHubApi, { headers: { 'User-Agent': 'node.js' } }, (err, res, body) => {
//   console.log(JSON.parse(body))
// })

//usando axios
axios.get(gitHubApi).then(res => {
  console.log(res.data)
})
console.log('teste')