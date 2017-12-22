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
          let files = fs.readdirSync(path.join('raw/',type+'/',name+'/'));
          console.log('files',files);
          if (!files) reject('missing files');
          console.log('seasons',files);
          files.forEach(season=>{
              let episodes = fs.readdirSync(path.join('raw/',type+'/',name+'/',season+'/'));
              if (!episodes) reject('missing episodes');
              output.shows[name][season] = episodes;
          });
        }
      });
      resolve(output);
    });
  });
}

module.exports = list;
