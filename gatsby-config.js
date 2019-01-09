module.exports = {
  siteMetadata: {
    title: 'ADP NYC',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Georgia`,
          `source sans pro` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
