const withWorkspaceTranspile = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      // Add a rule to include and parse all local modules
      config.module.rules.push({
        test: /\.+(js|jsx|ts|tsx)$/,
        loader: options.defaultLoaders.babel,
        exclude: /node_modules/
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};

module.exports = withWorkspaceTranspile;
