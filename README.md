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
3. Exhaustive tests to check results and errors

## Requirements

To run the program and run tests, Node.js must be installed globally on your device. 
This program is built with `Node 8.11.1`


## Install instructions

  ### Option 1: With `miner` command
From the root directory:

1. Install project dependencies: 

```sh
npm install 
```

2. Make `index.js` executable with `miner` command:  

```sh
npm link
```

For Windows, try `sudo` with the command: `e.g. sudo npm link`


3. Run command in the format: 

```sh
miner [file] [command] [argument]
```

### Example
```sh
$ miner data.json locate TX                                                                          
Company Names:
Aunt Bertha, Inc., CareSet Systems, Careset.com, Castle Biosciences, Epsilon, FlightAware, Fuzion Apps, Inc., Headlight, Innography, Junar, Inc.

Number of Companies: 10
```

  ### Option 2: With the file path 

1. Install project dependencies: 

```sh
npm install
```

2. Make `index.js` executable by modifying the execute permissions appropriate for your system:  

```sh
chmod +x ./index.js
```

For Windows, try `sudo` with the command: `e.g. sudo chmod +x ./index.js`


3. Run command in the format: 

```sh
./index.js [file] [command] [argument]
```

### Example
```sh
$ ./index.js data.json locate MI                                                                     
Company Names:
Compendia Bioscience Life Technologies, FarmLogs, LOVELAND Technologies, Munetrix

Number of Companies: 4
```

## Design overview

1. Language: I decided to use JavaScript with Node.js environment to achieve a rapid prototype.
2. Main Process: Main function `miner()` takes input from STDIN => Read the file to parse data => pass the data and user query to command handlers
=> the `logCompanies()` function takes the mapped result and logs it as a string to the console


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

- To make the program more user friendly, I would add more helpers for command or query errors. For example, I would add friendly intro giving introduction of the program or instructions when user makes an input error.
- I would add helper messages depending on the error type as well. For example, if the query has the wrong data type (e.g. number instead of string), a helper message can give direction to correct the input.
- If the dataset becomes larger, I would consider saving the data in a database to query the data more efficiently.


## Built With

* [NPM](https://www.npmjs.com)
* [Jest](https://jestjs.io)