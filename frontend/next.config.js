const path = require('path');

module.exports = {
  webpack: (config) => {
    // aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.join(__dirname, "src/components"),
      "@": path.join(__dirname, "src/")
    }
    return config;
  },
};
