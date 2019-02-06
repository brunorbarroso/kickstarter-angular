'use strict';

const minimist 	= require('minimist')
const makeDir 	= require('make-dir');
const path 	    = __dirname;
const { exec } = require('child_process');

var args = minimist(process.argv.slice(2), {  
    default: {
        pathSrc: '/src/app'
    },
});

Promise.all([
    makeDir(path+args.pathSrc+'/modules'),
    makeDir(path+args.pathSrc+'/shared'),
    makeDir(path+args.pathSrc+'/shared/components'),
    makeDir(path+args.pathSrc+'/shared/mocks'),
    makeDir(path+args.pathSrc+'/shared/models'),
    makeDir(path+args.pathSrc+'/shared/directives'),
    makeDir(path+args.pathSrc+'/shared/pipes'),
    makeDir(path+args.pathSrc+'/core/authentication'),
    makeDir(path+args.pathSrc+'/core/footer'),
    makeDir(path+args.pathSrc+'/core/guards'),
    makeDir(path+args.pathSrc+'/core/http'),
    makeDir(path+args.pathSrc+'/core/interceptors'),
    makeDir(path+args.pathSrc+'/core/mocks'),
    makeDir(path+args.pathSrc+'/core/services'),
    makeDir(path+args.pathSrc+'/core/header')
]).then(paths => {
    console.log('\x1b[42m%s\x1b[0m', 'All folders created successful! Good work ;)');
});

exec('cd src && tree', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });