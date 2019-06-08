require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./src/sampleroute").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://jmolesco.github.io/carecenter/")
            .save("./public/sitemap1.xml")
      );
  }
  
  generateSitemap();