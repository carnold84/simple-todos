# Simple Todos

Simple todo app built with React, Redux and Immutable JS.

Is designed to be used offline, but can be easily updated to save to an api.

## Dev

The main libraries used are:

- [Create React App](https://create-react-app.dev)
- [Redux](https://redux.js.org)
- [Immutable](https://immutable-js.github.io/immutable-js/)
- [Styled Components](https://styled-components.com)

Run in development mode (hot reloading) by running:

```
npm run start
```

## Build

Build for production by running:

```
npm run build
```

By default the build folder is renamed from the default of `build` to `docs`. This can be updated in `package.json` by changing `docs` in the following script:

```json
...
"scripts": {
  ...
  "build": "cross-env react-scripts build && mv build docs"
  ...
},
...
```

Alternatively, you can remove ` && mv build docs` to return the build directory name to the default, `build`.
