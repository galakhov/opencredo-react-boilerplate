module.exports = {
  server: {
    hostname: 'www.radiologie-am-kaiserteich.de',
    port: 80,
  },

  webpack: {
    devtool: 'source-map',
    output: {
      // publicPath: '/',
    },
  },

  compiler: {
    hash_type: 'chunkhash',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true,
    },
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  },
};
