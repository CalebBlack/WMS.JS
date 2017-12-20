const express = require('express');
const path = require('path');
module.exports = ['use','/shows',express.static(path.join(__dirname,'..','raw','shows'))];
