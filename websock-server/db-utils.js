#!/usr/bin/env node
const db = require('./lib/db');

var argv = require('minimist')(process.argv.slice(2));

console.log(argv);
if (argv.run === 'create') {
  console.log('db creation scripts running');
  db.createTable().then((err) => {
    console.log('creation result:', err ? err : 'Success');
  });
} else if (argv.run === 'list') {
  db.list().then((res) => {
    console.log('list result', res);
  });
} else if (argv.run === 'insert') {
  if (!argv.file) {
    console.error('You need to provide image file path. Usage: db-utils.js --insert --file <filepath>');
    return;
  }
  console.log('db insert scripts running');
  const fs = require('fs');
  const buffer = fs.readFileSync(argv.file);
  db.insert(buffer).then((res) => console.log('insert result', res));
}
