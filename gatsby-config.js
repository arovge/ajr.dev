module.exports = {
    siteMetadata: {
        title: "Austin Rovge",
        description: "Hi! I'm a software engineer in Milwaukee, WI. I'm working hard at learning new skills!",
        author: "@austinrovge"
    },
    plugins: [
        `gatsby-plugin-image`,
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#2377BE",
                theme_color: "#2377BE",
                display: "minimal-ui",
                icon: "static/favicon.png"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/images`
            }
        }
    ],
    flags: {
        DEV_SSR: false
    }
};
