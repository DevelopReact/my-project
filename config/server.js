// module.exports = ({ env }) => ({
//   host: env("HOST", "0.0.0.0"),
//   port: env.int("PORT", 1337),
//   app: {
//     keys: env.array("APP_KEYS"),
//   },
//   webhooks: {
//     populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
//   },
// });

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "ef81004cbe41272d46d4e493d2a523e39a73cd6f87cf492ed298860484288b25",
      "a6529669ef2817f89ce5038bb05425dc0a54f3e01894e1d84eb3cafc5d48c103",
    ]),
  },
});
