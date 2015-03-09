# La Goutte de Trop /!\ WIP /!

A collaborative application illustrating the idiom "The straw that broke the camel's back" in real life context.

Une application de groupe pour illustrer le proverbe "C'est la goutte d'eau qui fait déborder le vase" dans la vie réelle.

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Build The App

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ heroku git:clone -a la-goutte-de-trop
$ cd la-goutte-de-trop
$ npm install
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

### Running locally
Start your app locally using Foreman which is installed as part of the Heroku toolbelt.

```sh
$ foreman start web
```

You can also use the following npm command which launch "start" script defined in Package.json :
```sh
$ npm start
```


## Deploying to Heroku
Make some changes to the code you just cloned deploy them to Heroku using Git.

```
$ heroku login
$ git add .
$ git commit -am "make it better"
($ heroku create) // for your first deployment
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

### What you can learn with this project
- Node JS
- Express
- Socket.io
- Mongo DB
- Templating with EJS
- Authentication with PassportJS
- Bootstrap CSS
