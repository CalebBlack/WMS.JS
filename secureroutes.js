// CREATE SECURE ENDPOINTS
const express = require('express');
const authenticateSession = require('./functions/authenticatesession');
const secureMap = require('./secureroutes/map');

const secureRoutes = express.Router();

secureRoutes.use((req,res,next)=>{
  authenticateSession(req).then(session=>{
    res.locals.session = session;
    next();
  }).catch(err=>{
    res.status(400).send('Unauthorized');
  });
});

secureMap.forEach(route=>{console.log(route);secureRoutes[route[0]](route[1],route[2])});

module.exports = secureRoutes;
