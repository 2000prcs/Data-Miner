#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Commands } = require('./commands');

const [,, ...args] = process.argv;
// console.log(process.argv)
// console.log(args);

// Prints output to STDOUT
const logCompanies = (data) => {
  if(data.length === 0){
    console.log('No data found');
    return;
  } 
  console.log(`Company Names:\n${data.join(', ')}\n\nNumber of Companies: ${data.length}`);
}


// Main function to take input from STDIN
const miner = (file, command, argument) => {
  
  let data = fs.readFileSync(path.resolve(file), 'utf8');
  data = JSON.parse(data);

  // Call command handlers 
  let result = Commands[command](data, argument);
  logCompanies(result);
}



miner(args[0], args[1], args[2]);

