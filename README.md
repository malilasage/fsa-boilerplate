# Fullstack Single Page App Boilerplate

This is boilerplate code to create fullstack apps using:
* express
* node
* angular
* MongoDb/Mongoose or Postgres/Knex

Filestructure:
```
client
|- css
| |- style.css
|- js
| |- app
|   |- app.module.js
|   |- app.config.js
|   |- app.controller.js
|   |- app.template.html
| |- thing
|   |-thing.controller.js
|   |-thing.template.html
|- index.html
server
|-routes
|-server.js
bs-config.json
package.json
README.md

```

## To Get Started
Fork and clone this repo
`npm install`

Install lite-server
`npm install -g lite-server`

Run lite-server
`lite-server -c bs-config.json`

##### Test Server/Api Endpoints
Run server
`nodemon server/server.js`

Api using httpie
`http get http://localhost:3000/api`

