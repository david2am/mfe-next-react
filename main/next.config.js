const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        remotes: {
          shared: 'shared@http://localhost:8081/remoteEntry.js',
          remote: 'remote@http://localhost:8082/remoteEntry.js',
          mod: 'mod@http://localhost:8083/remoteEntry.js',
        },
        shared: ['react', 'react-dom'],
        extraOptions:{
          exposePages: true
        }
      }),
    );

    return config;
  },
};