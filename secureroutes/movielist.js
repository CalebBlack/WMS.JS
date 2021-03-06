const express = require('express');
const list = require('./list');

let movieslist = null;
list('movies').then(list=>{console.log('list',list);movieslist = list;}).catch(err=>{console.log('err',err);movieslist = err;});

module.exports = ['get','/movies',(req,res)=>{
  if (!movieslist) {
    return res.status(503).send('Service Booting...');
  } else if (movieslist instanceof Error){
    return res.status(503).send('movies List Unavailable');
  } else {
    return res.json(movieslist);
  }
}];
