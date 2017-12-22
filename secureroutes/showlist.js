const express = require('express');
const list = require('./list');

let movieslist = null;
list('shows').then(list=>{console.log('list',list);movieslist = list;}).catch(err=>{console.log('err',err);movieslist = err;});

module.exports = ['get','/shows',(req,res)=>{
  if (!movieslist) {
    return res.status(503).send('Service Booting...');
  } else if (movieslist instanceof Error){
    return res.status(503).send('Shows List Unavailable');
  } else {
    return res.json(movieslist);
  }
}];
