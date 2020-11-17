const fs = require("fs");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => { 
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addPlugin(syntaxHighlight);
    
    eleventyConfig.setFrontMatterParsingOptions({
      excerpt: true,
      // Optional, default is "---"
      excerpt_separator: "<---->",
      excerpt_alias: 'excerpt'
    });
    
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy({ 
      'src/_static': 'static/',
      'src/robots.txt': 'robots.txt'
    });
      
    // layout alias
    eleventyConfig.addLayoutAlias('default', 'default.liquid');
    eleventyConfig.addLayoutAlias('page', 'page.liquid');
    eleventyConfig.addLayoutAlias('detail', 'detail.liquid');
    
    // shortcodes
    eleventyConfig.addShortcode('svg', async (path) => {
      const svg = fs.readFileSync(path, 'utf-8')
      return svg;
    });
    
    eleventyConfig.addCollection('projects', (collectionApi) => {
      return collectionApi.getFilteredByGlob('src/_collections/projects/*.md');
    });
    
    return {
        pathPrefix: '',
        dir: {
            output: 'docs',
            input: 'src/',
            data: '_data',
            pages: '_pages',
            includes: '_includes',
            layouts: '_layouts'
        },
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'liquid',
    }
};