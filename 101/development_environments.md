# Development Environment
## Generic
### The technologies
  * **VSCode** as the IDE (See [recommeded extensions](101/development_environments?id=recommended-extensions-for-vscode) and [recommended user configurations](101/development_environments?id=recommended-user-configurations-of-vscode)).
  * **Node.js** for development. (See [recommended versions](101/development_environments?id=recommended-versions-of-nodejs-tools)).
  * **React** as frontend framework.
  * **esdoc** for documenting.
  * **eslint** for linting.
  * **airbnb** rules with an [exception in identation](nodejs/style_guide.md?id=javascript-style-guide).

### Recommended extensions for VSCode
Always use the most recent version of VSCode and his extensions, except if a specific version is written.
  * **DotENV** syntax for .env file.
  * **EditorConfig for VS Code** load config from .editorconfig file
  * **ESLint** load config from .eslintrc file
  * **GitLens** awesome extra git tools
  * **Node.js Modules Intellisense**
  * **IntelliJ IDEA Keybindings** (optional, to follow a standard)
  * **solidity by Juan Blanco** (for solidity developers)
  * **Hyperledger Composer** (for hyperledger developers)
  * **TSLint** (when using typescript)
  * **Polacode** (optional, awesome code print screens)

### Recommended user configurations of VSCode
To edit this, use CTRL+SHIFT+P (windows, linux) and write "open user settings". Then on the right side click the three dots and select "Open settings.json". Now, among any onther configs you should have
```javascript
{
    "git.autofetch": true,
    "git.rebaseWhenSync": true,
    "editor.insertSpaces": true
}
```


### Recommended versions of Node.js Tools
  * **Node.js** (`node -v`) >= 8.12.0
  * **yarn** (`yarn -v`) >= 1.10.0 (use yarn)


## Ethereum
How we deploy ethereum applications.
A simple pseudo-tutorial on what do we use to make ethereum dapps.

### The technologies

  * **Truffle** a set of tools to make dapp development easier.
  * **Metamask** a browser extension to interact with ethereum blockchain. See [more](101/manage_metamask.md).
  * **Ganache** local 10 node ethereum blockchain app with UI. See [more](101/manage_ganache_ui.md).

### Recommended extensions for VSCode
  * **vscode-solidity** from juanfranblanco, to lint solidity code

### The environment

**Assumptions**: you have *truffle.js* with right configuration.
In the first place we write a contract, then the test to this contract (all using the truffle suite, either using `$ truffle init` or any truffle box) and run the tests. Now you should be on the project folder (not tests folder) and run the command `$ truffle test ./test/*`. Just as a reminder, the *\** means that we want to run all files inside the folder *test*. You may want to run only of the files, so just write the name of it.

Then, after be sure that contracts are working, it's time to do the webapp. You can build it using truffle box or any other thing, you only need to follow the truffle project folder structure. Let's assume a few things now:

  * You already built a webapp and want to test it
  * You added one truffle account to the metamask extension (see more [here](101/manage_metamask.md))
  * This account on metamask has no transactions registered on it (if it has, reset the account)
  * *be careful with the configuration in truffle.js*

So, now it's time to run the webapp. Considering that you are using the truffle box react, you run the command `$ truffle develop` in the project folder then `(truffle)> compile` and `(truffle)> migrate` (or `(truffle)> migrate --reset` if you have migrated the contracts before). If everything goes ok, then run the webapp. If it's the truffle box react, use `$ npm run start`.
**Note** that *truffle develop* needs to keep running. Now just use the webapp. The `console.log` actions will appear on the browser console, just do F12 and select the console tab.
