# Naming Convetions

\(to-be-completed\)

# File Naming

## Smart Contracts

### Source

 * We use solidity
 * File name are always CamelCase
 * Each file has only one smart contract

### Tests

 * We use TypeScript
 * Files have **.test.ts** extension
 * File name is always CamelCase procced by a number that determines the order (eg. `01_SomeContract.test.ts`)
 * Each file tests only one contract or a portion of it

## Frontend

\(to-be-completed\)

# Linters

## Solidity
\(to-be-completed\)

## TypeScript
\(to-be-completed\)

# git

The **branches** have the following format:
branch\_type/feature/short\_description

Where `branch_type` must be one of new/bug/refactor.
 * New: We are adding functionality that didn't exist before.
 * Bug: We are fixing something that is broken.
 * Refactor: The functionality is not changing, but we are making the code better.

Where `feature` is one word referring to the target feature for this branch.

And where `short_description` is one word, sometimes none, sometimes two, referring to the change.

Examples:
`new/whitelist`
`new/issuance-tokens`
`refactor/readme-contribute`
`bug/ci-yarn-integrity`

The **pull requests** have no naming convention, except being required to list in the name the issues they refer to.

# Structure

## Smart Contracts

\(to-be-completed\)

## Frontend

\(to-be-completed\)

