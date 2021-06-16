module.exports = {
  lintOnSave: false,
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"],
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
    },
  },
};
