'use strict'

module.exports = async function (app, opts) {
    app.register(require('./create'))
    app.register(require('./delete'))
    app.register(require('./update'))
}