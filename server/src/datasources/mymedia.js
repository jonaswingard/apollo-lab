const { DataSource } = require("apollo-datasource");

class MyMediaAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async createTag({ title } = {}) {
    const tag = await this.store.tags.create({
      title
    });

    return tag && tag.dataValues ? tag.dataValues : null;
  }

  async upsertTag(tag) {
    const x = { ...tag };

    const updatedTag = await this.store.tags.upsert(x);
    return updatedTag && updatedTag.dataValues ? updatedTag.dataValues : null;
  }

  async deleteTag({ id } = {}) {
    return await this.store.tags.destroy({
      where: { id }
    });
  }

  async getAllTags() {
    return await this.store.tags.findAll();
  }
}

module.exports = MyMediaAPI;
