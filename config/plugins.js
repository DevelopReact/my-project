module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "MYMRBmeC4U+pINahSc+J8g=="),
    },
  },
});
