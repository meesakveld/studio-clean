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
    eleventyConfig.addPassthroughCopy("input/robots.txt");

    eleventyConfig.setBrowserSyncConfig({
        server: {
          baseDir: "./docs/",
          serveStaticOptions: {
            base: "/ui-prototyping-studio-clean/"
          }
        }
      });
    
    return {
        pathprefix: "/ui-prototyping-studio-clean/",
        dir: {
            input: "./input",
            output: "./docs"
        }
    }
};