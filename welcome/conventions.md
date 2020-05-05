# Conventions

Welcome to **conventions** section. We follow a set of conventions, not only file naming, so that we get organized. We try to follow as much as possible what the largest communities are doing, making it easier to onboard outside contributors to our open-source projects.

# File Naming

> How you organize and name your files will have a big impact on your ability to find those files later and to understand what they contain. You should be consistent and descriptive in naming and organizing files so that it is obvious where to find specific data and what the files contain.
>
> It's a good idea to set up a clear directory structure that includes information like the project title, a date, and some type of unique identifier. Individual directories may be set up by date, researcher, experimental run, or whatever makes sense for you and your research.

<small>from https://library.stanford.edu/research/data-management-services/data-best-practices/best-practices-file-naming</small>


## Smart Contracts

### Source

 * We use solidity.
 * File name are always CamelCase.
 * Each file has only one smart contract.

### Tests

 * We use TypeScript.
 * Files have **.test.ts** extension.
 * File name is always CamelCase procced by a number that determines the order (eg. `01_SomeContract.test.ts`).
 * Each file tests only one contract or a portion of it.

## WebUI

### Source

 * We use reactjs.
 * We use Typescript.
 * Files have **.tsx** extension or **.ts** for non-ui related.
 * File name are always CamelCase.
 * Each file is either a component or a hook.

### Tests

 * We use jest with some other dependencies, depending on the project requirements.
 * We use TypeScript.
 * Files have **.test.tsx** extension.
 * File name is always CamelCase with the component name.
 * Each file tests only one component/hook or a portion of it.

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
`new/issuance/tokens`
`refactor/readme/contribute`
`bug/ci/yarn-integrity`

The **pull requests** have no naming convention, except being required to list in the name the issues they refer to.

# Projects Structure

## Smart Contracts

\(to-be-completed\)

## WebUI

As we use [reactjs](https://reactjs.org), there are many options. But one of the most common ones is [grouping by file type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type), as described in reactjs docs. And this is the standard we follow. Depending on the complexity of the project, we can consider moving to [atomic web design](https://bradfrost.com/blog/post/atomic-web-design/) but only as a matter of organization.

### Tests

Usually tests are in the source folder, next to the source file, within a test folder.
