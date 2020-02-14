const { DataSource } = require("apollo-datasource");

class FoobarAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async createFoobar({ foobar } = {}) {
    const foobars = await this.store.foobars.findOrCreate({
      where: { foobar }
    });
    return foobars && foobars[0] ? foobars[0] : null;
  }

  async getAllFoobars() {
    const email = "you@you.com";
    const foobars = await this.store.users.find({
      where: { email }
    });

    return foobars && foobars[0] ? foobars[0] : null;
  }

  // async bookTrip({ launchId }) {
  //   const userId = this.context.user.id;
  //   const res = await this.store.trips.findOrCreate({
  //     where: { userId, launchId }
  //   });
  //   return res && res.length ? res[0].get() : false;
  // }

  // async getLaunchIdsByUser() {
  //   const userId = this.context.user.id;
  //   const found = await this.store.trips.findAll({
  //     where: { userId }
  //   });
  //   return found && found.length
  //     ? found.map(l => l.dataValues.launchId).filter(l => !!l)
  //     : [];
  // }
}

module.exports = FoobarAPI;
