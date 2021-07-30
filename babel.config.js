module.exports = function (api) {
  const isDev = api.env('development');
  const isProd = api.env('production');

  const targets = 'last 1 chrome version, last 1 firefox version';

  const presets = [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { development: isDev, runtime: 'automatic' }],
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    isDev && 'react-refresh/babel',
  ].filter(Boolean);

  return {
    targets,
    presets,
    plugins,
  };
};
