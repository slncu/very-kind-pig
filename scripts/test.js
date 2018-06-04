module.exports = robot => {
  const getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const arr = [
    'https://gyazo.com/f4b9279043553fa5cabc3df06f79ea34',
    'https://gyazo.com/89b61a2b6819929866e529158b40f3db',
    'https://gyazo.com/5d142003e90cc1ab97d94568ae460191',
    'https://gyazo.com/ebbfc20938474ae00aa9dbbacf5033b8'
  ]

  robot.hear(/今日も一日/i, (res) => {
    res.send(arr[getRandom(arr.length)])
  })
}