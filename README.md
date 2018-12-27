![CF](http://i.imgur.com/7v5ASc8.png)
=================================================

## Lab 29 - Component Composition

### Author: Chris Kozlowski

### Links and Resources
* [Code Sandbox Assignment 1](https://codesandbox.io/s/8mjrj4759)
* [Code Sandbox Assignment 2](https://codesandbox.io/s/21v8nx4q8j)
* [GitHub Repository](https://github.com/kozlowskicd/lab-29)

### Modules
#### `stuff-class.js`
Exports class component that renders thing-class.js, includes children for 'thing' in the render.

#### `thing-class.js`
Exports class component that renders it's children from props.

#### `stuff-func.js`
Exports functional component that renders thing-func.js, includes children for 'thing' in the render.

#### `thing-func.js`
Exports functional component that renders it's children from props.

#### `app.js`
Exports class component that renders both `stuff-class.js` and `stuff-func.js`.

#### `index.js`
Renders Main, which displays the component in `app.js`.

### Setup
#### .env requirements
* N/A

#### Running the app
* Navigate web browser to https://codesandbox.io/s/8mjrj4759 or https://codesandbox.io/s/21v8nx4q8j

#### Tests
* Tests are included in Code Sandbox.
* Assertions include checking components are correctly rendering.
* Assertions for checking children from props should be made.

#### UML
![Lab 29 UML](https://raw.githubusercontent.com/kozlowskicd/lab-29/master/public/lab-29.jpg "Lab 29 UML")