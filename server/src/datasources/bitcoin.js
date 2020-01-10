const { RESTDataSource } = require("apollo-datasource-rest");

class BitcoinAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.coindesk.com/v1/";
  }

  async getCurrentPrice() {
    const response = await this.get("bpi/currentprice.json");
    const data = JSON.parse(response);

    return {
      ...data,
      updated: data.time.updatedISO,
      price: data.bpi.USD.rate_float
    };
  }
}

module.exports = BitcoinAPI;
