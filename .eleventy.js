module.exports = function (eleventyConfig) {
    const baseUrl = "/studio-clean"; // De base URL voor GitHub Pages

    // Filter om items te beperken tot een bepaalde limiet
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => {
        if (!limit) return arr;
        return arr.slice(0, limit);
    });

    // Filter om navigatie-items te sorteren op volgorde
    eleventyConfig.addFilter("sortByOrder", (navItem) => {
        return navItem.sort((a, b) => a.data.order - b.data.order);
    });

    // Filter om datums te formatteren naar een specifiek formaat
    eleventyConfig.addFilter("customDate", (dateObj) => {
        const date = dateObj;
        const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
        return formattedDate;
    });

    // Filter om URL's aan te passen aan de base URL
    eleventyConfig.addFilter("absoluteUrl", (url) => {
        if (url.startsWith("mailto:") || url.startsWith("tel:")) {
            return url;
        }

        return `${baseUrl}${url}`;
    });

    // Zorg ervoor dat assets worden gekopieerd naar de outputmap
    eleventyConfig.addPassthroughCopy("input/assets/");

    return {
        dir: {
            input: "./input",  // Inputmap
            output: "./docs"   // Outputmap (moet `docs` zijn voor GitHub Pages)
        },
        pathPrefix: baseUrl // Base URL instellen voor GitHub Pages
    };
};