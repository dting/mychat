# MyChat

Live Demo @ https://mychat.codedting.com

## Features

Authentication with username and password using JSON Web Token (JWT)  
Chat room creation  
Live updates of messages and rooms using polling  
Emojis  
Link detection  
Chrome, Firefox, and Opera support  

## Built using:

[React](https://facebook.github.io/react/)  
[Redux](https://github.com/reactjs/redux)  
[Redux API Middleware](https://github.com/agraboso/redux-api-middleware)  
[React Router](https://github.com/ReactTraining/react-router)  

[DraftJs](https://facebook.github.io/draft-js/)  
[DraftJs Plugin Editor](https://github.com/draft-js-plugins/draft-js-plugins)  
[Moment](http://momentjs.com/)  

[Sass](http://sass-lang.com/)  
[WebPack](https://webpack.github.io/)  
[Babel](https://babeljs.io/)  

## File Structure

```
MyChat
├── client
│   ├── components
│   │   └── // Reusable components and static views
│   ├── config
│   │   └── // Client configuration files
│   ├── containers
│   │   └── // Components that make up application views
│   ├── modules
│   │   └── // Redux actions, constants, and reducers
│   └── styles
│       └── // Sass mixins, variables, and imports
├── node_modules
│   └── // Dependencies
├── public
│   └── // Optimized html, js, and css files from `npm run build`
├── server
│   └── // Development server
└── // Application dot files, READMEs, and configs
```

- scss files are located in directories of the components they are styling.
- `client/modules` folder is a spin on [redux ducks](https://github.com/erikras/ducks-modular-redux).
  * Actions are created following [FSA](https://github.com/acdlite/flux-standard-action) standard.
  * API calls are made using Redux API Middleware [RSAA](https://www.npmjs.com/package/redux-api-middleware#redux-standard-api-calling-actions).

## Viewing the app for development

### Requirements

MongoDb 3.2
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- https://docs.mongodb.com/manual/administration/install-on-linux/
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Node 6
- https://nodejs.org/en/

For OSX, homebrew can be used to install mongodb and node:

    brew install mongodb
    brew install node

### Development

As configured currently, mongodb is required to run the development server.

The development server is using express and webpack-dev-middleware to serve the client.
Install dependencies using npm:

    npm install

Start dev server using:

    npm start

The WEB server listens on port 9000
The API server listens on port 9001

Wait for the WebPack bundle to build then navigate to:

[http://localhost:9000](http://localhost:9000)

### Build

Optimized files to serve for production can be built using:

    npm run build

Files will be output to the `/public` folder
