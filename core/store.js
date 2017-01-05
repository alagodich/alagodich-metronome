const createStore = require('redux').createStore,
    reducer = require('./reducer.js');

module.exports = () => createStore(reducer);
