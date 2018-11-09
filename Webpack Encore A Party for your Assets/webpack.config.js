var Encore = require('@symfony/webpack-encore');


Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/rep_log.js
    .addEntry('rep_log', './public/assets/js/rep_log.js')
    .addEntry('login', './public/assets/js/login.js')
    .addEntry('layout', './public/assets/js/layout.js')

    .enableBuildNotifications()

    // whenever webpack finds a module that references an uninitialized global jquery variable
    // webpack rewrites the code to require jquery
    .autoProvidejQuery()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();