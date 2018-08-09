# Company Data Miner
> Command Line Tool for querying company data

## Table of Contents

1. [Design Overview](#design-overview)
2. [Install Instructions](#install-instructions)
3. [Assumptions](#assumptions)
4. [Testing](#testing)
5. [Future Improvements](#future-improvements)

## Demo

<img width="700" height="80" src="https://i.imgur.com/NmPzAa9.png">


## Achievements

1. Modularized code
2. Utilized modern ES6 JavaScript formatting
3. Exhaustive tests to check result and errors

## Requirements

To run the program and run tests, Node.js must be installed globally in your device. 
This program is built with `Node 8.11.1`

## Design overview

1. Language: I chose JavaScript with Node.js environment 
2. Environment: To make the script executable, I mapped `./index.js` command with bin. This maps the command to the file `index.js` to be executed.
3. Main Process: Main function `miner()` takes input from STDIN => Read the file to parse data => pass the data and user query to command handlers
=> the `logCompanies()` function takes the mapped result and logs it as a string to the console


## Install instructions

From the root directory:

1. Install npm and dependencies globally to make the script executable: 

```sh
npm install -g
```

2. Run command in the format 

```sh
./index.js [file] [command] [argument]
```

```sh
./index.js data.json find_companies_between_size 1,001-5,000
Company Names:
Abt Associates, Bridgewater, Chemical Abstracts Service, College Board, CoreLogic, Dun & Bradstreet, Esri, Fitch, Forrester Research, Gallup, Graebel Van Lines, Informatica, Inovalon, JJ Keller, Moody\'s, Morningstar, Inc., Navico

Number of Companies: 17
```

## Assumptions

- I initially considered saving the data in a database, but switched my decision to go with simple JavaScript handlers. Given the fact that the amount of data is not that large, querying with the JSON file directly would be much simpler and faster.
- I was handling the commands with a switch statement in main file `index.js` originally, but separated the logic to `commands.js` for more modularization.
- My assumption is the file will be <b>JSON format</b> as mentioned in the challenge instructions. Therefore, I implemented my logic and tests with the given assumption.

## Testing

Unit tests are implemented with Jest. Testing environment is set to Node.

```sh
npm test
```

## Future Improvements

- To make the program more user friendly, I can add more helpers for command or query errors. For example, I can add friendly intro giving introduction of the program or instructions when user makes an input error.
- I can add helper messages depending on the error type as well. For example, if the query is a wrong data type (e.g. number instead of string), helper message can give a direction to correct the input.
- If the dataset becomes larger, I can consider save the data in a database to query the data more efficiently.


## Built With

* [NPM](https://www.npmjs.com)
* [Jest](https://jestjs.io)