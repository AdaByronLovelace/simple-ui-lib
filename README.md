# simple-ui-lib

TO DO
- ~~Add webpack~~ 
- ~~Add react~~
- ~~Add babel~~
- ~~Add eslint~~
- Add stylelint ???
- Add babel polyfill
- ~~Add css-in-js~~ https://github.com/Khan/aphrodite
- Switch to JSS https://github.com/cssinjs/jss
- Add global styles to JSS
- Add packages folder and have bundle for the package separate from the demo pages
- Add jest and also https://github.com/dmiller9911/jest-aphrodite-react
- Add postcss https://github.com/lttb/postjss

##for pm2 env add 
"start": "pm2 start pm2.config.js && pm2 web",
"stop": "pm2 delete all && pm2 kill",
"restart": "pm2 restart all"
"prestart": "webpack-dev-server --hot",
