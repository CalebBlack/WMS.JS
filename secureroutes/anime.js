const express = require('express');
const path = require('path');


module.exports = ['use','/anime',express.static(path.join(__dirname,'..','raw','anime'))];
