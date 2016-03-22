SmartAdmin on ReactJS!
======================

development
-----------
To run the code in your development environment:

1. Clone this repo
2. Run `npm install`
3. Run `bower install`

Now with all dependencies installed

4. Start the development server for seed project with `npm run dev`
5. Point your browser to [http://localhost:14602](http://localhost:14602)

***********************************************

resources
---------
- [complete project demo](http://sarj-shockwave.rhcloud.com)

-----------------------------------------------

bundled with Webpack
--------------------
[webpack](https://webpack.github.io/) is a module bundler.
This means webpack takes modules with dependencies
and emits static assets representing those modules.


smartadmin is shipping with two webpack.config.js files:
- one for development (npm run dev)
- one for production ready build (npm run build)


common stuff is separated in webpack/base.config.js


some of smartadmin-webpack features
-----------------------------------
- code chunking (vendor.chunk with react, jquery etc.,  ui.chunk with plugins, and so on)
- babel transpiling (you can use es6 syntax for development, and babel transpiles it to es5 javascript which all browsers are familiar with)
- in dev mode:
  1. hot module replace
  2. fast project rebuild
- for production:
  1. obfuscation,
  2. minification


******************************************************************