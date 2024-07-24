
module.exports = {  
  resolve: {  
    fallback: {  
      "os": require.resolve("os-browserify/browser"),  
      "path": require.resolve("path-browserify"),  
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser")
    },
  },
};
