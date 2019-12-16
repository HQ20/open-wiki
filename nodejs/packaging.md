# Packaging

We often publish new versions of the open source projects we have. This tools are provided through npm packages.

If you are looking forward to, how we publish this packages, you are in the right place.

## Setting up package.json

```javascript
{
    "name": "@hq20/package-name",
    "version": "0.0.1-beta",
    "files": [],
    "peerDependencies": {},
    "devDependencies": {}
}
```

Above is an example of a package.json of a project. It should always contains at least the field shown above. Each on of them has a different purpose.

### name
The project name. In most projects we want to have an org scoped project. To do so we add `@hq20/` before the package name. It is not a rule. When starting a new package it must be decided if using or not, and when updating, it should never change.

### version
We follow the [semver](https://semver.org/) standard. Always starting with version **0.0.1**. Read the standard to better understand. The version needs to be changed in every release.

### files
Files or folders to be included in the package. We write typescript almost everywhere, we always have test and most times scripts. This are all things that we don't want to include. We compile typescript to javascript and then release the js files (often in a `dist` folder). And we also include the types which we usually don't track on git.

Considering that we want to add `dist` and `types` folders on the package when releasing it, it would look like
```javascript
"files": [
    "dist/",
    "types/"
]
```

### peerDependencies
Read more about `peerDependencies` in npm documentation. We avoid `dependencies` at all cost, if it's a tool to be pluged. The reason why we do that is that, although it looks cool to have a tool that we just install and works out of the box, it isn't cool to install it and have a thousands dependecies taken with it. Thus, we use `peerDependencies`. `peerDependencies` will require the project to have those dependencies itself. By doing that we avoid circular dependencies and also prevent ou developers to install the same package twice with different versions.

### devDependencies
Dependencies needed to develop the tool. peerDependencies ar also here, because peerDependencies does not install anything, it's just a requirement, so we need to include them ehre.

## Releasing

The realeasing process is simple. Once you have the package.json setup, the version that is going to be release is correct in package.json and the file is pushed to remote, you are good to go.

First, we add a tag. It's important to use tags, this way it's much simpler for us to track version using git.

Example
```bash
$ git tag -a v0.0.1-beta -m "Version v0.0.1-beta"
$ git push -u origin v0.0.1-beta
```

With this, the tag is added and pushed to remote git.

Finally it's time to publish it `npm publish --access public`. You might need to be logged in, and if the package already exists, you might need to be allowed to publish a new version.

When running `npm publish --access public`, you must have 2FA in your npm account. Also, before publishing, please verify that all the files are being included. Before asking for your OTP key, npm will show you the files that will be published, as well as the name, version, etc.

## Test it

It's good to always test our products. We always do it before releasing. But we should do it afterwards as well, just to check that nothing went wrong.

Create a new project, install that dependency you've just published and use it.

### Before oficial release

We, sometimes test it before releasing, using only the git repository. To do so, create a new project and install the dependency using `github_username/repository_name#branch` (eg. `HQ20/contracts#dev`). This will download the github repository into your project's node_modules, and install it's dependencies. Bear in mind that, when doing this, the package name will totally be ignored and instead the folder's name in node_modules will only be the `repository_name`, ignoring the `github_username` as well. Consider the `HQ20/contracts#dev` repository, with a package name of `@hq20/contracts`. When you install is like `yarn add HQ20/contracts#dev`, it will be in node_modules, within a folder named `contracts`.