const fs = require('fs');
const path = require('path');
function list(type){
  return new Promise((resolve,reject)=>{
    fs.readdir(path.join('raw/',type+'/'),(err,files)=>{
      if (err) return reject(err);
      let output = {movies:[],shows:{}};
      files.filter(filename=>!['.gitignore','.ds_store'].includes(filename.toLowerCase())).forEach(name=>{
        console.log(type,name);
        if (name.includes('.')) {
          output.movies.push(name);
        } else {
          output.shows[name] = {};
          fs.readdirSync(path.join('raw/',type+'/',name+'/'),(err,files)=>{
            if (err || !files) reject(err);
            files.forEach(season=>{
              fs.readdirSync(path.join('raw/',type+'/',name+'/',season+'/'),(err,episodes)=>{
                if (err || !episodes) reject(err);
                output.shows[name][season] = episodes;
              });
            });
          });
        }
      });
      resolve(output);
    });
  });
}

module.exports = list;
