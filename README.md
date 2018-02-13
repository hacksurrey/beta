<div align="center">

<img width="350px" src="https://raw.githubusercontent.com/hacksurrey/beta/master/resources/logo.svg?sanitize=true">
<br><br>

[![Build Status](https://img.shields.io/travis/hacksurrey/beta.svg?style=for-the-badge)](https://travis-ci.org/hacksurrey/beta) [![license](https://img.shields.io/github/license/hacksurrey/beta.svg?style=for-the-badge)](https://github.com/hacksurrey/beta/blob/master/LICENSE) [![GitHub top language](https://img.shields.io/github/languages/top/hacksurrey/beta.svg?style=for-the-badge)]() [![Twitter Follow](https://img.shields.io/twitter/follow/hacksurrey.svg?style=for-the-badge)](https://twitter.com/hacksurrey)

</div>

---

## Introduction
Before playing around with this website you need to understand how everything fits together. The website itself is a single Vue application. The Vue application is loaded in the `app\application.js` file and the `app\Application.vue` component is used to render the application. Weback is used to bundle everything together (the how is defined in the `webpack.config.js` file) as well as to create a development server with livereload (using the `npm run dev` command). Deployment is very simple: everything inside the `public` folder after `npm run build` has been executed needs to be published. In our case, this is done by using TravisCI and Github Pages.

## Serving Files Locally (during Development)
1. Clone this repository using git:
   ```
   $ git clone https://github.com/hacksurrey/beta.git
   ```
2. Install all Node dependencies using NPM (whilst I adore Yarn, I chose not to use it for this project):
   ```
   $ npm install
   ```
3. Start the development server using Node and NPM:
   ```
   $ npm run dev
   ```
4. That's it! If everything has been done correctly, Node has now started a development server (usually on `localhost:8080`) and has also opened your browser to this location. Have fun and don't break anything!
