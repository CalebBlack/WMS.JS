const express = require('express');
const path = require('path');
const fs = require('fs');

let animelist = null;
function load(){
  return new Promise((resolve,reject)=>{
    fs.readdir(path.join('raw/','anime/'),(err,files)=>{
      if (err) return reject(err);
      let output = {movies:[],shows:{}};
      files.filter(moviename=>!moviename.endsWith('.gitignore')).forEach(name=>{
        if (name.includes('.')) {
          output.movies.push(name);
        } else {
          output.shows[name] = {};
          fs.readdir(path.join('raw/','anime/',name+'/'),(err,files)=>{
            if (err || !files) reject(err);
            files.forEach(season=>{
              fs.readdir(path.join('raw/','anime/',name+'/',season+'/'),(err,episodes)=>{
                if (err || !episodes) reject(err);
                output.shows[name][season] = episodes;
                resolve(output);
              });
            });
          });
        }
      });
    });
  });
}

load().then(list=>{console.log(list);animelist = list;}).catch(err=>{console.log(err);animelist = err;});

module.exports = ['get','/anime',(req,res)=>{
  if (!animelist) {
    return res.status(503).send('Service Booting...');
  } else if (animelist instanceof Error){
    return res.status(503).send('Anime List Unavailable');
  } else {
    return res.json(animelist);
  }
}];
