const LRU = require("lru-cache");

const cache = new LRU({
  max: 150,
});
cache.set("something", {});
cache.get("something");
