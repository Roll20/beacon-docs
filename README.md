# beacon-docs
Repository for public documentation of Beacon SDK.

## Install dependencies 
```
npm install
```

## Run locally
The docs:dev script will start a local dev server with instant hot updates. 
Run it with the following command:
```
npm run docs:dev

```

## Build and Test Locally
Run this command to build the docs:

``
npm run docs:build
```
Once built, preview it locally by running:

```
npm run docs:preview
```

The preview command will boot up a local static web server that will serve the output directory .vitepress/dist at http://localhost:4173. You can use this to make sure everything looks good before pushing to production.