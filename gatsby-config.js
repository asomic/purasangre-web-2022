require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Pura Sangre CrossFit`,
    siteUrl: `https://purasangrecrossfit.cl`,
    description: `El único box de CrossFit certificado de la región`,
    url: `https://purasangrecrossfit.cl`,
    image: "/psc-social.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        quality: 100,
      },
    },
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
