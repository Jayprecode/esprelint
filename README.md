# Documentation

This package template utilizes 
- [ESLint](https://github.com/BrindoSoft/Frontend-structure/edit/dev/README.md#eslint), 
- [Prettier](https://github.com/BrindoSoft/Frontend-structure/edit/dev/README.md#prettier), 
- [Husky](https://github.com/BrindoSoft/Frontend-structure/edit/dev/README.md#husky), 
- [Lint-staged](https://github.com/BrindoSoft/Frontend-structure/edit/dev/README.md#lint-staged) 


## To integrate into a new project

1. Install this package as devDependency

```sh
# with Yarn
$ yarn add -D gcp4react

# with npm
$ npm i -D gcp4react

```

2. Install peer dependencies of this package in your project as devDependencies

Therefore, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```sh
# with Yarn
<<<<<<< HEAD
$ yarn dlx install-peerdeps --dev gcp4react

# with npm
$ npx install-peerdeps --dev gcp4react


```


3. Use ESLint config in your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["gcp4react"],
};
```

4. Use Prettier config in your project

Create a `.prettierrc` file in project root with the following content:

```
"gcp4react"
```

## Why?

The essence of the tools listed above implemented in this template, is applicable for the use of ensuring ```Good code practice (GCP)```

# Eslint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

- ESLint uses Espree for JavaScript parsing.
- ESLint uses an AST to evaluate patterns in code.
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

### Find Problems

ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

### Fix Automatically

Many problems ESLint finds can be automatically fixed. ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms.

### Customize

Preprocess code, use custom parsers, and write your own rules that work alongside ESLint's built-in rules. You can customize ESLint to work exactly the way you need it for your project.

For better understanding and configuration visit [Eslint](https://www.npmjs.com/package/eslint)

<br />
<br />
<br />

# Prettier

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

Prettier can be run in your editor on-save, in a pre-commit hook, or in CI environments to ensure your codebase has a consistent style without devs ever having to post a nit-picky comment on a code review ever again!

For better understanding and configuration visit [Prettier](https://www.npmjs.com/package/prettier)


<br />
<br />
<br />

# Husky

Husky improves your commits and more 🐶 woof!

### Install

```bash
npm install husky --save-dev
# or
yarn add husky --save-dev
```

### Usage

Edit ```package.json > prepare``` script and run it once:

```bash
npm set-script prepare "husky install"
npm run prepare
# or
yarn set-script prepare "husky install"
yarn prepare
```

Add a hook:

```bash
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

Make a commit:

```bash
git commit -m "Keep calm and commit"
# `npm test` will run
```

For better understanding and configuration, read through the documentation provided by [Husky](https://typicode.github.io/husky)

<br />
<br />
<br />

# Lint-staged

Run linters against staged git files and don't let 💩 slip into your code base!

Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

```bash
$ git commit

✔ Preparing lint-staged...
❯ Running tasks for staged files...
  ❯ packages/frontend/.lintstagedrc.json — 1 file
    ↓ *.js — no files [SKIPPED]
    ❯ *.{json,md} — 1 file
      ⠹ prettier --write
  ↓ packages/backend/.lintstagedrc.json — 2 files
    ❯ *.js — 2 files
      ⠼ eslint --fix
    ↓ *.{json,md} — no files [SKIPPED]
◼ Applying modifications from tasks...
◼ Cleaning up temporary files...
```
For better understanding and configuration visit [Lintstaged](https://www.npmjs.com/package/lint-staged)

<br />
<br />
<br />

## Contributions

Yes please! Feature requests / pull requests are welcome.