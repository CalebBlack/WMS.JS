const express = require('express');
const list = require('./list');

let animelist = null;
list('anime').then(list=>{animelist = list;}).catch(err=>{console.log('err',err);animelist = err;});

module.exports = ['get','/anime',(req,res)=>{
  if (!animelist) {
    return res.status(503).send('Service Booting...');
  } else if (animelist instanceof Error){
    return res.status(503).send('Anime List Unavailable');
  } else {
    return res.json(animelist);
  }
}];
