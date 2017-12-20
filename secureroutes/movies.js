const express = require('express');
const path = require('path');
module.exports = ['use','/movies',express.static(path.join(__dirname,'..','raw','movies'))];
