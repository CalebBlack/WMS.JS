const express = require('express');
const routeMap = require('./routes/map');

const routes = express.Router();

routeMap.forEach(route=>{secure[route[0]](route[1],route[2])});

module.exports = routes;
