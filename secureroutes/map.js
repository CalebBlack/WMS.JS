module.exports = ['validateauth','shows','movies'].map(name=>{return require('./'+name)});
