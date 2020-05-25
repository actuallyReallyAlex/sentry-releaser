<p align="center">
  <a href="https://github.com/alexlee-dev/sentry-releaser" rel="noopener">
 <img width=256px height=256px src="https://res.cloudinary.com/alexlee-dev/image/upload/v1590418214/sentry-releaser/sentry-releaser.svg" alt="Logo"></a>
</p>

<h3 align="center">Sentry Releaser</h3>

<div align="center">

[![NPM](https://img.shields.io/npm/v/sentry-releaser.svg)](https://www.npmjs.com/package/sentry-releaser)
[![GitHub Issues](https://img.shields.io/github/issues/alexlee-dev/sentry-releaser)](https://github.com/alexlee-dev/sentry-releaser/issues)
[![Dependencies](https://img.shields.io/david/alexlee-dev/sentry-releaser)](https://github.com/alexlee-dev/sentry-releaser)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">A tool to help with Sentry Releases.
    <br> 
</p>

![Example](https://res.cloudinary.com/alexlee-dev/image/upload/v1590425174/sentry-releaser/create-release.gif)

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

The Sentry CLI is friendly...but not that friendly. If you just want to grab all your code for a release and do something as simple as "sentry release v1.3.0", you can't. Especially if you're managing multiple projects across different repositories.

**Sentry Releaser** aims to help you manage your Sentry releases to be as pain free as possible.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you set up to use Sentry Releaser on your machine.

### Prerequisites

- Node
- NPM / Yarn
- A Sentry account (at least 1 org, and 1 project - see [Sentry Getting Started](https://docs.sentry.io/error-reporting/quickstart/?platform=javascript))
- Sentry integration with your Git provider (see [Sentry Install Repo Integration](https://docs.sentry.io/workflow/releases/?platform=javascript#install-repo-integration))

### Installing

**NPM**

```bash
npm install -g sentry-releaser
```

**Yarn**

```bash
yarn global add sentry-releaser
```

## 🎈 Usage <a name="usage"></a>

Navigate a terminal session to your git repo.

```bash
cd /users/alex/cool-project
```

Start Sentry Releaser

```bash
$/users/alex/cool-project > sentry-releaser
```

### 🚀 Initial Setup

![Inital Setup](https://res.cloudinary.com/alexlee-dev/image/upload/v1590428783/sentry-releaser/setup.gif)

### 📦 Create a New Release

![Create a New Release](https://res.cloudinary.com/alexlee-dev/image/upload/v1590425174/sentry-releaser/create-release.gif)

## ⛏️ Built Using <a name = "built_using"></a>

- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right.
- [clear](https://github.com/bahamas10/node-clear) - Clear the terminal screen if possible.
- [configstore](https://github.com/yeoman/configstore) - Easily load and persist config without having to think about where and how.
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - A collection of common interactive command line user interfaces.
- [pickitt](https://pickitt.netlify.com/) - When you need a computer to just pick it, reach for Pickitt!
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

## ✍️ Authors <a name = "authors"></a>

- [Alex Lee](https://github.com/alexlee-dev) - Application Developer

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Package icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)
