module.exports = function(api) {
  api.cache(true);

  const presets = ["next/babel", "@zeit/next-typescript/babel"];

  return {
    presets,
    plugins: []
  };
};
