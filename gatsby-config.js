module.exports = {
  siteMetadata: {
    title: `Rose Hack 2019`,
    description: `The live website for Rose Hack 2019. Check this website to keep up to date during the event.`,
    author: `@rosehack_ucr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rose Hack 2019`,
        short_name: `Rose Hack`,
        start_url: `/`,
        background_color: `#acccec`,
        theme_color: `#acccec`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124411502-2',
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'rosehack.com',
      },
    },
  ],
}
