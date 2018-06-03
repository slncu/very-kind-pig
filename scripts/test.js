module.exports = robot => {
  robot.hear(/てすと/i, (res)=> {
    res.send("テあスト")
  })
}