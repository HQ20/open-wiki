# Solidity

This chapter is about solidity tricks and contracts built within the company and where were they used.

## Tips
When compilling files from `File outside of allowed directories issue`, for example, contracts using openzeppelin-solidity, *solc* usually returns an error.

The solution is as simple as using the flag *--alow-paths <path>*, for example `solc contracts/*.sol --bin --abi --optimize -o build-solc/ --alow-paths /`.
