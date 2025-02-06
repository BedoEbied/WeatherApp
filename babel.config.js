module.exports = function getBabelConfig(api) {
  api.cache(true);

  const plugins = [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true,
    }],
  ];

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins,
  };
};
