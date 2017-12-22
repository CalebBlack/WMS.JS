module.exports = ['validateauth','shows','movies','movielist','animelist'].map(name=>{return require('./'+name)});
