
## Install dependencies
In the root folder and install the dependencies before continuing.

```
npm install
```

## Start the development server
To preview your work locally and automatically refreshes your browser when you make changes.

Inside your project folder, run the following command to start the development server:

```
npm run dev
```

## Add pages
Add new pages to your site by creating .md or .html files in content/docs/. Use sub-folders to organize your files and to create multiple path segments.

For example, the following command will generate a page at example.com/docs/guides/faq:

```
npm run create docs/guides/faq.md
```

## Build project
To build your project, run the following command:

```
hugo
```

Or 

```
npm run build
```
