function bcoinGet(apiKei, convTo){
  var h = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': apiKei
  };

  var options = {
  'method' : 'get',
  'headers': h
  };
  var response = UrlFetchApp.fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&symbol=BCOIN&convert=' + convTo, options);
  let j = JSON.parse(response.getContentText())
  let r = j['data']['quote'][convTo]['price']

  return r;
}
