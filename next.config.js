module.exports = {
  target: 'serverless',
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
    //localeDetection: false,//doesn't work
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
