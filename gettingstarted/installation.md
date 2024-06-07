# Installation

This guide will help you set up the Beacon SDK on your machine.

## Prerequisites

Before you can install the Beacon SDK, you'll need to have Node.js installed on your machine. If you don't have Node.js installed, use the following steps in the [official Node.js documentation](https://nodejs.org/en/download/package-manager).

## Step 1: Accessing Beacon SDK

```js
npm i @roll20-official/beacon-sdk
```

## Step 2: Install & Import

The following steps will guide you in installing the package in your application:

1. **Add the package to your `package.json`:**
  
    Under the `dependencies` object key of your `package.json`, add a new string key called `@roll20/beacon-sdk` with the version you want to install from our version history.

    **For example**:

    ```json
    {
      "@roll20/beacon-sdk": "0.0.0"
    }
    ```

    For more information about installing packages, refer to the [NPM documentation](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

2. **Run `npm install`:**

    Open a terminal in the root of your application’s folder and run the following command:

    ```bash
    npm install
    ```

    For more information about NPM commands, refer to the [NPM install documentation](https://docs.npmjs.com/cli/v6/commands/npm-install).

3. **Import the necessary package contents in your application:**

    The package exports various utilities you can use in your application. For example, you will need to utilize the `initRelay` function from the package.

    Here's an import statement for that function:

    ```javascript
    import { initRelay } from '@roll20/beacon-sdk';
    ```

    For more information about imports, refer to the [JavaScript import documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
