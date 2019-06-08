require('babel-register');
 
const router = require('./router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://jmolesco.github.io/carecenter')
        .save('./sitemap.xml')
);