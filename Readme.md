# Try bdd with utils

##About

This project is used as an example of utility functions suite (analogue of
Underscore or LoDash) and BDD tests. There are:
* sort(): Sort given array by provided rule in comparator function
* capitalize(): Make first letter of given string upper case
* camelize(): Camelize given string or array of string.
* trim(): Cut of any count of spaces from the beginning and from the end of the string.
* reverse(): Reverses a specified list.
* map(): Change each list's element by applying handler.
* groupBy(): Group some input sequence of element by some rule.
* once(): Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect.
* debounce(): Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.
* deepEqual(): Utility function for equivalent comparing of objects and arrays.
* toString(): Utility function for converting Object to String.
* inputType(): Utility function to determine of input type of object.

##Install Tools

```bash

npm install --global mocha browserify beefy

```

##Install Libs

```bash

npm install

```

##Run Tests in console

```bash

npm test

```

##Run Tests in browser

```bash

npm run test-in-browser

```

Open browser at http://localhost:9966/