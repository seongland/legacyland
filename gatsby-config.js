module.exports = {
  siteMetadata: {
    siteUrl: `https://legacy.seongland.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97880882-3",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://legacy.seongland.com",
        sitemap: "https://legacy.seongland.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-7GYN10MKSW"],
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
