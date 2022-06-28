const assert = require('assert');
const ganache = require('ganache-cli');
// Uppercase because it is a constructor function
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

