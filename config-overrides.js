const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@font-family": "'Axiforma', Helvetica, Arial, sans-serif",
      "@border-color-base": "#b4b3b3",
      "@border-radius-base": "0",
      "@input-color": "#888",
      "@btn-circle-size": "46px",
      "@btn-circle-size-lg": "56px",
      "@btn-circle-size-sm": "34px",
      "@btn-border-radius-base": "100px",
      "@btn-shadow": "none",
      "@btn-primary-shadow": "none",
      "@btn-text-shadow": "none",
      "@btn-primary-color": "#000",
      "@btn-default-border": "#000",
      "@btn-font-weight": "bold",
      "@primary-color": "#ff9f00"
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};
