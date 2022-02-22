module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
  eleventyConfig.addPassthroughCopy('img');
}
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
