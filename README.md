![Dependencies Updates Status](https://david-dm.org/proustibat/la-goutte-de-trop.svg)
# La Goutte de Trop /!\ WIP /!

A collaborative application illustrating the idiom "The straw that broke the camel's back" in real life context.

Une application de groupe pour illustrer le proverbe "C'est la goutte d'eau qui fait déborder le vase" dans la vie réelle.

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Build The App

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:proustibat/la-goutte-de-trop.git
$ cd la-goutte-de-trop
$ npm install
```

### Running locally
```sh
$ nodemon app.js
```

or just use node
```sh
$ node app.js
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

You can also use the following npm command which launch "start" script defined in Package.json :
```sh
$ npm start
```

### Save code on Github :
```sh
$ git commit -am "message"
$ git push
```


### Connecting to Heroku remote
[https://devcenter.heroku.com/articles/git#tracking-your-app-in-git]

```sh
$  heroku create
Creating falling-wind-1624... done, stack is cedar-14
http://falling-wind-1624.herokuapp.com/ | https://git.heroku.com/falling-wind-1624.git
Git remote heroku added
```

Iy you have an error : "Heroku client internal error."
```sh
$  heroku update
```

You can verify the remote in your git configuration as well:
```sh
$ git remote -v
heroku  https://git.heroku.com/blooming-springs-9863.git (fetch)
heroku  https://git.heroku.com/blooming-springs-9863.git (push)
origin  git@github.com:proustibat/la-goutte-de-trop.git (fetch)
origin  git@github.com:proustibat/la-goutte-de-trop.git (push)
```


## Deploying Code
Make some changes to the code you just cloned deploy them to Heroku using Git.

```sh
$ git push heroku master
Counting objects: 799, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (479/479), done.
Writing objects: 100% (799/799), 1.33 MiB | 239.00 KiB/s, done.
Total 799 (delta 271), reused 794 (delta 269)
...
...

See the result:
```sh
$ heroku open
```

## Using Foreman
Start your app locally using Foreman which is installed as part of the Heroku toolbelt.

```sh
$ foreman start web
```

## Using heroku for the first time ?
```sh
$ heroku login
```

## Rename Apps from the CLI
```sh
$ heroku apps:rename newname --app oldname
```

If any error :
```sh
npm install -g foreman
nf start
```
Your app should now be running on [localhost:5000](http://localhost:5000/).




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



## License

[MIT](./LICENSE)
