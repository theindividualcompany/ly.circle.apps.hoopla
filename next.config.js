const withTM = require("next-transpile-modules")(["react-timezone-select"]);

if (process.env.BASE_URL) {
  process.env.NEXTAUTH_URL = process.env.BASE_URL + "/api/auth";
}

module.exports = withTM({
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
