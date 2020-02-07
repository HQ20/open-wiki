# Tests

## [Truffle] In-test debugging

Truffle is our tool of choice for tests. Even thought it is a great tool, sometimes it's difficult to debug when something does not work. Truffle has provided a new method to debug tests. Follow the instructions [here](https://www.trufflesuite.com/docs/truffle/getting-started/debugging-your-contracts#in-test-debugging) to know how to do it.

For us, that documentation wasn't enough because we write our tests in typescript and the `debug` keyword makes them fail. To fix that problem, it's necessary to define that function at the top of the file. Please add
```javascript
declare function debug(input: any): Promise<void>;
```