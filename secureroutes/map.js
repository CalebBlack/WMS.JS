module.exports = ['validateauth','shows'].map(name=>{return require('./'+name)});
