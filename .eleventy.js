const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addFilter("customDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("dd.MM.yyyy");
    });
    eleventyConfig.addPassthroughCopy("input/assets/");
    
    return {
        dir: {
            input: "./input",
            output: "./output"
        }
    }
};