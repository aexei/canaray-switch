[![npm](https://img.shields.io/npm/v/react-cookie-switch.svg)](https://www.npmjs.com/package/react-cookie-switch)
![NPM](https://img.shields.io/npm/l/react-cookie-switch)

# react-cookie-switch

A HOC for building a switch or checkbox to toggle a canary cookie.

## tl;dr

- Install by executing `npm install react-cookie-switch` or `yarn add react-cookie-switch`.
- Import by adding `import CookieSwitch from "./CookieSwitch";`.
- Use by adding

```js
  <CookieSwitch cookieName="canary">
    <input id="canary" name="canary" type="checkbox"></input>
    <label htmlFor="canary">use of our canray version</label>
  </CookieSwitch>
```

## Demo

A minimal demo page can be found as storybook

`npm run storybook`

## Installation

Add react-cookie-switch to your project by executing `npm install react-cookie-switch` or `yarn add react-cookie-switch`.

### Usage

Here's an example of basic usage:

```js
import React, { useEffect, useState } from "react";
import Clock from "react-cookie-switch";

function MyApp() {
  return (
    <CookieSwitch cookieName="canary">
      <input id="canary" name="canary" type="checkbox"></input>
      <label htmlFor="canary">use of our canray version</label>
    </CookieSwitch>
  );
}
```
## User guide

### Clock

Displays a complete clock.

#### Props

| Prop name                | Description                                     | Default value | Example values                                                        |
| ------------------------ | ----------------------------------------------- | ------------- | ----------------------------------------------------------------------|
| cookieName               | Cookie name                                     | n/a           | <ul><li>`"canary"`</li><li>`"beta"`</li><li>`"next"`</li></ul>        |
| attribute                | The attribute set to the children elements      | `checked`     | <ul><li>`"checked"`</li><li>`"selected"`</li><li>`"active"`</li></ul> |
| activated                | Value of the attribute and cookie if active     | true          | <ul><li>`"true"`</li><li>`1`</li><li>`"on"`</li></ul> |
| deactivated              | Value of the attribute and cookie if not active | false         | <ul><li>`"false"`</li><li>`0`</li><li>`"off"`</li></ul> |



## License

The MIT License.
