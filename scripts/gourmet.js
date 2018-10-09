const axios = require('axios');
const parser = require('xml2json');
const utils = require('../utils');
const API = require('../utils/api')
const API_KEY = '3ddd3a68f4d544b9';
const { getRandom } = utils;

module.exports = robot => {
  const getShop = async (keyword) => {
    return await axios.get(`${API.GOURMET}/`, {
      params: { key: API_KEY, keyword }
    }).then(async (res) => {
      const data = await res.data;
      const parsedData = JSON.parse(parser.toJson(data));
      // 不正なkeyword catch
      if (parsedData.results.shop === undefined) return false;

      return parsedData.results.shop[getRandom(parsedData.results.shop.length)]
    }).catch(e => {
      console.log(e);
      return e;
    })
  }

  robot.respond((/(meshi) (.*)/i), async (res) => {
    const keyword = res.match[2];
    if(!await getShop(keyword)) {
      res.send(`${keyword}なんてものはない`)
    } else {
      const { name, address, urls: { pc } } = await getShop(keyword);
      res.send(`${keyword}のおすすめはここじゃ\n${name}\n${address}\n${pc}`)
    }
  })
}