const express = require('express');
const path = require('path');
const fs = require('fs');

let movielist = null;

fs.readdir(path.join('raw/','movies/'),(err,files)=>{
  if (err) return movielist = err;
  movielist = files.filter(moviename=>!moviename.endsWith('.gitignore'));
  console.log(movielist);
});

module.exports = ['get','/movies',(req,res)=>{
  if (!movielist) {
    return res.status(503).send('Service Booting...');
  } else if (movielist instanceof Error){
    return res.status(503).send('Movie List Unavailable');
  } else {
    return res.json(movielist);
  }
}];
