module.exports = function override(config, env) {
  // this rule is to add support for global scss variables & mixins
  const globalSassFiles = ['./src/styles/abstracts/variables/*', './src/styles/abstracts/_mixins.scss'];

  config.module.rules.push({
    test: /\.scss$/,
    use: {
      loader: 'sass-resources-loader',
      options: {
        resources: globalSassFiles
      }
    }
  });

  return config;
};
