#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Commands } = require('./commands');

const [,, ...args] = process.argv;


// Prints output to STDOUT
const logCompanies = (data) => {
  if(data.length === 0){
    console.log("No Companies Found with Your Query");
    return;
  } 
  console.log(`Company Names:\n${data.join(', ')}\n\nNumber of Companies: ${data.length}`);
}


// Main function to take input from STDIN
const miner = (file, command, argument) => {

  let data;

  try {
    data = fs.readFileSync(path.resolve(file), 'utf8');
  } catch (err) {
    console.log("Error Occured: Wrong File Path");
    return;
  }
  data = JSON.parse(data);

  // Call command handlers if the command is correct
  if(!Commands[command]){
    console.log("Error Occured: Wrong Command");
    process.stdout.write("\nList Of Commands:\n");
    process.stdout.write("- locate [state] e.g. locate CA\n");
    process.stdout.write("- find_before [year] e.g. find_before 1800\n");
    process.stdout.write("- find_after [year] e.g. find_after 2010\n");
    process.stdout.write("- find_companies_between_size [size] e.g. find_companies_between_size 1-10\n");
    process.stdout.write("- find_type ['type'] (note: wrap argument with quotes) e.g. find_type 'Lifestyle & Consumer'\n")
    return;
  }

  let result = Commands[command](data, argument);
  logCompanies(result);
  
  return result;
}


// If testing environment export modules, otherwise invoke miner with STDIN
if(!process.env.TEST){
  miner(args[0], args[1], args[2]);
} else if (process.env.TEST){
  module.exports = {
    miner,
    logCompanies,
  };
}