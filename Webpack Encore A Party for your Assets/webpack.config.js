var Encore = require('@symfony/webpack-encore');


Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/rep_log.js
    .createSharedEntry('layout', './assets/js/layout.js')
    .addEntry('rep_log', './assets/js/rep_log.js')
    .addEntry('login', './assets/js/login.js')    

    .enableBuildNotifications()

    // whenever webpack finds a module that references an uninitialized global jquery variable
    // webpack rewrites the code to require jquery
    .autoProvidejQuery()

    .enableSassLoader()

    // copies to {output}/static
    .copyFiles({ from: './assets/static', to: 'static/[name].[ext]' })
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning()

;

// export the final configuration
module.exports = Encore.getWebpackConfig();