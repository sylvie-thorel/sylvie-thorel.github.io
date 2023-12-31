const nunjucksFilters = require("./nunjucksFilters.config.js");
const markdownConfig = require("./markdown.config.js");
const processJsConfig = require("./processJs.config.js");
const processCssConfig = require("./processCss.config.js");

/** @param {import('@11ty/eleventy').UserConfig} config */
module.exports = function (config) {
  nunjucksFilters(config);
  markdownConfig(config);
  processJsConfig(config);
  processCssConfig(config);

  config.addPassthroughCopy({ "public/**/*": "/" });
  return {
    dir: {
      input: "src/content",
      includes: "../templates",
      data: "../data",
      output: "dist",
    },
  };
};
