module.exports = {
  server: {
    hostname: 'www.radiologie.4dd-communication.com',
    port: 80,
  },

  webpack: {
    devtool: 'source-map',
    output: {
      publicPath: '/',
    },
  },

  compiler: {
    hash_type: 'chunkhash',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true,
    },
  },
};
