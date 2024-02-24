module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("input/assets/");
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    
    return {
        dir: {
            input: "./input",
            output: "./output"
        }
    }
};