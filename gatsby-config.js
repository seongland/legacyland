module.exports = {
  siteMetadata: {
    siteUrl: `https://www.seongland.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.seongland.com",
        sitemap: "https://www.seongland.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-K07XS3W0ZQ"],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/default`),
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "script-src":
            "'self' *.cloudflare.com www.googletagmanager.com www.google-analytics.com static.cloudflareinsights.com 'unsafe-inline'",
          "style-src-elem": "'self' data: 'unsafe-inline'",
          "style-src": "'self' 'unsafe-inline'",
          "font-src": "'self' fonts.gstatic.com 'unsafe-inline'",
          "connect-src":
            "'self' *.cloudflare.com www.googletagmanager.com *.seongland.com cloudflareinsights.com stats.g.doubleclick.net www.google-analytics.com 'unsafe-inline'",
          "frame-src": "'self' 'unsafe-inline'",
          "img-src": "'self' www.google-analytics.com 'unsafe-inline'",
        },
      },
    },
  ],
}
