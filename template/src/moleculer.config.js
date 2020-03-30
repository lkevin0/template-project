const options = {
  metrics: true,
};
  
if (process.env.CACHER) {
  options.cacher = {
    type: 'MemoryLRU',
    options: {
      max: 100,
      ttl: 300,
    },
  };
}
  
module.exports = options;
