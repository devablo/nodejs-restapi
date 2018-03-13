### Getting Started
npm init

### Flow
Follow Flow Setup
https://flow.org/en/docs/install/
```
npm install --save-dev babel-cli babel-preset-flow
npm install --save-dev flow-bin
npm install --save-dev flow-typed
npm install --global flow-bin
```

## Babel
Add .babelrc
```
{
  "presets": ["flow"]
}
```

## package.json
```
{
  "name": "my-project",
  "main": "lib/index.js",
  "scripts": {
    "build": "babel src/ -d lib/",
    "prepublish": "npm run build",
    "flow": "flow"
  }
}
```

## Run
```
npm run flow init
npm run flow

```


### VS Code Editor
Install flowtype.flow-for-vscode
Add to .vscode\settings.json
```
{
  "flow.useNPMPackagedFlow": true,
  "javascript.validate.enable": false,
  "typescript.validate.enable": false
}
```

### Other Dependencies
npm install uuid
npm install rambda
npm install --save-dev babel-preset-es2015 babel-preset-stage-2
npm install --save-dev nodemon

## Express
npm install express

### Useful
- https://hackernoon.com/architecting-single-page-applications-b842ea633c2e
- https://github.com/babel/example-node-server
```
Running Babel Command/Shell
./node_modules/.bin/babel src -d lib
```


### Running
```
npm run build
npm start
npm run serve
```

You should be able to hit API http://localhost:3000/api/articles
