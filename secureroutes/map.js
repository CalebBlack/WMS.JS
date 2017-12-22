module.exports = ['validateauth','shows','movies','movielist','showlist','animelist'].map(name=>{return require('./'+name)});
