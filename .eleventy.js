module.exports = function(eleventyConfig) {
    
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => {
        if (!limit) return arr;
        return arr.slice(0, limit);
    });

    eleventyConfig.addFilter("sortByOrder", (navItem) => {
        return navItem.sort((a, b) => a.data.order - b.data.order);
    });

    eleventyConfig.addFilter("customDate", (dateObj) => {
        const date = dateObj
        const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
        return formattedDate;
    });
    eleventyConfig.addPassthroughCopy("input/assets/");
    eleventyConfig.addPassthroughCopy("robots.txt");
    
    return {
        dir: {
            input: "./input",
            output: "./docs"
        }
    }
};