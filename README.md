# simple-ui-lib

TO DO
- Add webpack 
- Add react
- Add babel 
- Add babel polyfill
- Add css-in-js

##for pm2 env add 
  "start": "pm2 start pm2.config.js && pm2 web",
  "stop": "pm2 delete all && pm2 kill",
  "restart": "pm2 restart all"
  "prestart": "webpack-dev-server --hot",