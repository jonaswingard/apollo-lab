const { RESTDataSource } = require("apollo-datasource-rest");

class MediaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3/";
    this.apiKey = process.env.THEMOVIEDB_API_KEY;
  }

  async getAllTrendingMovies() {
    const response = await this.get(
      `trending/movie/week?api_key=${this.apiKey}`
    );

    return response.results;
  }
}

module.exports = MediaAPI;
