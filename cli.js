#!/usr/bin/env node
'use strict';
const meow       = require('meow');
const getStdin   = require('get-stdin');

const cli = meow(`
        Usage
          ~ ❯❯❯ caesar <text>
          ~ ❯❯❯ cat <file> | caesar
        Options
          -n, --shift   Use specific shift number
          -b, --break   Bruteforce all possible shifts
        Example
          ~ ❯❯❯ caesar 'havpbea'
          unicorn
          ~ ❯❯❯ caesar 'omcha mbczn 6' -n 6
          using shift 6
`, {
    flags: {
        shift: {
            type: 'integer',
            alias: 'n',
            default: 13
        },
        break: {
            type: 'boolean',
            alias: 'b',
            default: false
        }
    }
});

const input = cli.input[0];

function substitute (text, shift) {
    var result = [];
    text.forEach(function(char) {
        if (char.search(/[A-Za-z]/) !== -1) {
            var upper = /[A-Z]/.test(char);
            var char = char.toLowerCase();
            var charNum = char.charCodeAt(0);
            if (charNum + shift > 122) {
                char = String.fromCharCode(96 + ((charNum + shift) - 122));
                if (upper) result.push(char.toUpperCase());
                else result.push(char);
            } else {
                if (upper) result.push((String.fromCharCode(charNum + shift)).toUpperCase());
                else result.push(String.fromCharCode(charNum + shift));
            }
        } else {
            result.push(char);
        }
    })
    return result.join('')
}

function caesar (text) {
    var splitted = text.split('');
    var num = cli.flags["shift"];
    if (!cli.flags["break"]) {
        console.log(substitute(splitted, num));
    }
    else {
        for (num = 1; num < 26; num++) {
            console.log("ROT-" + num + ": " + substitute(splitted, num));
        }
    }
}

if (!input && process.stdin.isTTY) {
        console.log('Specify ROT-ciphered string to break');
        process.exit(1);
}

if (input) {
        caesar(input);
} else {
        getStdin().then(stdin => {
                caesar(stdin);
        });
}