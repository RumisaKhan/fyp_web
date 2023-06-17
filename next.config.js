/*
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});*/
const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";
const settings = {
  env: {
    },
    devIndicators: {
      autoPrerender: false,
    },
    pwa: {
      disable: prod ? false : true,
      dest: "public",
    },
  };
  module.exports = process.env.NODE_ENV === "development" ? settings : withPWA(settings);