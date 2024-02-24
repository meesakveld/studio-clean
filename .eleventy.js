module.exports = function(eleventyConfig) {
    
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addPassthroughCopy("input/assets/");
    
    return {
        dir: {
            input: "./input",
            output: "./output"
        }
    }
};