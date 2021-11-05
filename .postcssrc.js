// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {
      browsers: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions"
      ]
    },
    "postcss-pxtorem": {
      rootValue: 192,
      propList: ["*", "!border*"],
      minPixelValue: 12,
      mediaQuery: false
    }
  }
};
