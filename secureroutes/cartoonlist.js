const express = require('express');
const list = require('./list');

let cartoonlist = null;
list('cartoons').then(list=>{cartoonlist = list;}).catch(err=>{console.log('err',err);cartoonlist = err;});

module.exports = ['get','/anime',(req,res)=>{
  if (!cartoonlist) {
    return res.status(503).send('Service Booting...');
  } else if (cartoonlist instanceof Error){
    return res.status(503).send('Anime List Unavailable');
  } else {
    return res.json(cartoonlist);
  }
}];
