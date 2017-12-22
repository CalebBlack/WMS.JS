module.exports = ['validateauth','shows','movies','movielist'].map(name=>{return require('./'+name)});
