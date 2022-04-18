require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Pura Sangre CrossFit`,
    siteUrl: `https://purasangrecrossfit.cl`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Pura Sangre CrossFit",
        short_name: "Pura Sangre",
        background_color: "#ED0386",
        theme_color: "#ED0386",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
