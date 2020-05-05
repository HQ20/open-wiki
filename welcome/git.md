# git

In case you are new to git, please have this two cheatsheets handy
 * https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf
 * https://education.github.com/git-cheat-sheet-education.pdf

And if you are new to github, please have a look at the flow [here](https://guides.github.com/introduction/flow/).

Please, have a look at [github training](https://lab.github.com/githubtraining) as well.

To improve your skills about git, please visit [https://try.github.io/](https://try.github.io/) and visit **Learn by doing** list.

Before moving any further, please [read our conventions](welcome/naming_conventions.md#git), related to git.

## Manage accounts in github

Using our own accounts, we all must have ssh keys. Regarding that, [github has very good documentation](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

You can find how to generate, add a new key, test it and use it.

Considering that you have an ssh key setup, you must always clone repositories with ssh, not https. When opening the github repository, you see the option to `Clone with SSH` or `Clone with HTTPS`. Always use ssh.

### Manage multiple accounts

Your main account will be used by default in all of your repositories. When working with different clients, they might request a new github account.

If so, do the follow
1. create a new ssh key, with a different path
2. clone the repository with https
3. got to the repository folder on your filesystem and run `git config core.sshCommand "ssh -i paths/to/your/new/ssh/keys -F /dev/null"`
4. change the git url to ssh by copying from the repository and change it locally with `git remote set-url origin <ssh-url>`

## Split and Merge repositories

### Split a repository

Imagine you want to split a given folder in a repository into a new repository. Easy, but what if you want to keep the history of only the commits to that folder and put them on the new repository? And what about cleaning the history from that removed folder from the previous repository. Below and the original links from where the information was taken.

**Sources**
* https://help.github.com/en/github/using-git/splitting-a-subfolder-out-into-a-new-repository
* https://stackoverflow.com/a/17824718/3348623

### Merge two repositories

Now imagine that you have two separated repositories and want to merge them into only one and maintaining the history of both of them.

**Sources**
* https://gist.github.com/msrose/2feacb303035d11d2d05#file-combining-git-repositories-md