const siteUrl = "https://lmlconsulting.fr";
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `LML Consulting`,
        siteUrl: siteUrl,
        description: `LML Consulting vous accompagne comme conseil pour vos projets ou en mission de management de transition en Supply Chain et Amélioration continue`
    }, plugins: ["gatsby-plugin-styled-components", {
        resolve: 'gatsby-plugin-manifest', options: {icon: 'src/resources/icon.svg'}},{
        resolve: `gatsby-plugin-sitemap`,
        options: {
            query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }
        `,
            serialize: ({path, pageContext}) => {
                return {
                    url: path,
                    lastmod: pageContext?.lastMod,
                }
            },
        },
    },
        `gatsby-plugin-git-lastmod`
    ]
};