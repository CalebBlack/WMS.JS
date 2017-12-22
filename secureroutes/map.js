module.exports = ['validateauth','shows','movies','movielist','showlist','anime','animelist','cartoons','cartoonlist'].map(name=>{return require('./'+name)});
