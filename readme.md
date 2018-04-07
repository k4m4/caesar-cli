# caesar-cli [![Build Status](https://travis-ci.org/k4m4/caesar-cli.svg?branch=master)](https://travis-ci.org/k4m4/caesar-cli)

> Break rotational letter substitution (ROT), right from your terminal.

---

## Install

```
~ ❯❯❯ npm install -g caesar-cli
```


## Usage

```
  Break rotational letter substitution (ROT), right from your terminal.

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
```


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)