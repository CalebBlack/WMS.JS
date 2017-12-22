const express = require('express');
const path = require('path');


module.exports = ['use','/cartoons',express.static(path.join(__dirname,'..','raw','cartoons'))];
