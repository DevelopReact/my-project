"use strict";

const { sanitize, validate } = require("@strapi/utils");

module.exports = {
  async update(ctx) {
    // some logic here
    const response = await super.update(ctx);
    // some more logic

    return response;
  },
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product");
