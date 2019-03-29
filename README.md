Zero finance project's scaffold.

## create new aproject

For instance, the new project's name is called my-app.

```bash
git clone https://github.com/cqu903/zero-react-admin my-app
cd my-app
```

### install yarn

```bash
npm install -g yarn
```

### initialize

```bash
yarn
```

### development

```
yarn start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### production

```bash
yarn build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### architecture

```
.
├── build
├── node_modules
├── public
│   ├── api
│   │   └── ...                       // api mock
│   └── index.html                    // main entry
├── commons                           // Common
│   ├── business                      // Common business related components
│   │   ├── myTab                     // tab
│   │   ├── zeroList                  // list
│   │   └── ...
│   ├── constant
│   │   └── pubSub.js                 // publish and subscribe constant defined
├── config
│   ├── development.js                // development configuration
│   ├── en.json                       // i18n file configuration: english
│   └── zh.json                       // i18n file configuration: chinese
├── pages
│   ├── home                          // Home page
│   │   ├── index.js                  // entry
│   │   ├── style.js                  // style component
│   │   ├── components                // page component
│   │   ├── store # redux
│   │       ├── actionCreators.js     // action
│   │       ├── actionTypes.js        // action constant defined
│   │       ├── index.js              // redux entry
│   │       └── reducer.js            //  reducer
│   ├── ...
│   └── router.js                     // router entry
├── statics                           // static file, usually image files
│   ├── css                           // css
│   └── images                        // images
├── store
│   ├── index.js
│   └── reducer.js                    // It can define different namespace reducer
├── utils                             // Util tool
│   └── http.js                       // axios
├── App.js                            // Main component
├── index.js                          // Main js entry
└── style.js                          // Gloal style
```
