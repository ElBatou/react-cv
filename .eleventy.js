const pageHeading = require("./src/_includes/shortcodes/pageHeading");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  eleventyConfig.addShortcode("pageHeading", pageHeading);
  eleventyConfig.addShortcode("currentYear", function() {
    const today = new Date();
    return today.getFullYear().toString();
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}