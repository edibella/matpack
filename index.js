#! /usr/bin/env node
var prompt = require('prompt');
var promptInputs = require('./lib/prompt-inputs.js')

prompt.start();
prompt.colors = false;
prompt.message = " ";
prompt.delimiter = "\n>";
prompt.get(promptInputs.schema, promptInputs.callback);
