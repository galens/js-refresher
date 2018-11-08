var Encore = require('@symfony/webpack-encore');


Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // tells webpack to do stuff on RepLogApp.js, 
    .addEntry('rep_log', './public/assets/js/RepLogApp.js')
;

// export the final configuration
module.exports = Encore.getWebpackConfig();