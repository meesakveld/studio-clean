const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => {
        if (!limit) return arr;
        return arr.slice(0, limit);
    });

    eleventyConfig.addFilter("sortByOrder", (navItem) => {
        return navItem.sort((a, b) => a.data.order - b.data.order);
    });

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