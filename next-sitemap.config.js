const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,

  trailingSlash: true,
  additionalPaths: async () => {
    /* return ["/about", "/contact", "/blog"]; */
  },
};
/*   sitemaps: [
    {
      loc: "https://www.japanesegrammar.tokyo/sitemap-0.xml",
      lastmod: new Date(),
      changefreq: "daily",
    },
  ], */
