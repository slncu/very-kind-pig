module.exports = robot => {
  const getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const fight = [
    'https://gyazo.com/f4b9279043553fa5cabc3df06f79ea34',
    'https://gyazo.com/89b61a2b6819929866e529158b40f3db',
    'https://gyazo.com/5d142003e90cc1ab97d94568ae460191',
    'https://gyazo.com/ebbfc20938474ae00aa9dbbacf5033b8'
  ]

  const mazai = [
    'https://gyazo.com/66dccf74990572ef397fb9ac02f5b038',
    'https://gyazo.com/e47285bb51508e14e100b07759b65c14',
    'https://gyazo.com/5597d86cfe0ba2b12345f7d1326a6312',
    'https://gyazo.com/df63fcd531c31c2916575ac169870282'
  ]

  robot.hear(/今日も一日/i, (res) => {
    res.send(fight[getRandom(fight.length)])
  })

  robot.hear(/(魔剤|まざい)/i, (res) => {
    res.send(mazai[getRandom(mazai.length)])
  })
}