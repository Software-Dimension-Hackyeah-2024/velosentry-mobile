module.exports = function (api: any) {
  api.cache(true);
  return {
    presets: ["@babel/preset-typescript", "babel-preset-expo"],
    plugins: ["nativewind/babel", "module:react-native-dotenv"],
  };
};
