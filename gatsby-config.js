module.exports = {
  siteMetadata: {
    title: `The Junior Dev`,
    description: `This is my coding blog where I write about my coding journey.`,
    image: `/TheJrDev.png`,
    siteUrl: `https://thejrdeveloper.com`,
    siteLanguage: `en`,
    siteLocale: `en`,
    twitterUsername: `@thejrdev`,
    authorName: `Naseem Raad`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` },
    },
  ],
};
