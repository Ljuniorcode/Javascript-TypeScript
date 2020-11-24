(async () => {
  const axios = require('axios')
  const gitHubApi = user => `https://api.github.com/users/${user}/repos`

  // const res = await axios.get(gitHubApi)
  // console.log(res.data)

  const users = ['otaviolemos', 'rmanguinho']

  console.time()
  users.forEach(async user => {
    const res = await axios.get(gitHubApi(user))
    console.log(res.status)
  })

  // const p1 = axios.get(gitHubApi('otaviolemos'))
  // const p2 = axios.get(gitHubApi('rmanguinho'))
  // await Promise.all([p1, p2])

  console.timeEnd()
})()

//usando a técnica de função invocada IIFE

