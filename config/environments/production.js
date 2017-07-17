module.exports = {
  server: {
    hostname: 'www.gura-verwaltung.de',
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
