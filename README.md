# Boxfish Helpers
Reusable Mustache / Handlebars helpers for Boxfish projects.

## Docs
Docs can be found here: http://bxfsh.github.io/boxfish-helpers/

## Installation
Install using Bower:
```shell
bower install boxfish-helpers --save
```

### How it works
Rather than register the helpers to a specific template engine,
the bower package will expose a global object called `BoxfishHelpers`.

With this the helpers can be registered to Handlebars, CanJS or Mustache.

CanJS
```javascript
can.mustache.registerHelper(BoxfishHelpers);
```

Handlebars
```javascript
// Registers all helpers at once
Handlebars.registerHelper(BoxfishHelpers);
```

## Contributing
The helper functions are located in `./helpers` as individual ES6 JavaScript files.

To add a new helper:

* Create a new js file in `helpers`
```javascript
/**
 * Helper description
 * @method HelperName
 * @param  {Type} arg1 (required) - description 
 * @param  {Type} arg2 (required) - description 
 * @param  {Object]} options
 * @example {{helperName arg1 arg2}}
 */
export function helperName(arg1 = 4, arg2 = 5, options) {
  if (arg1 > arg2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
```

* Run Gulp to build the helpers:
```shell
gulp
```

or use `gulp watch` to automatically build when you make changes

* Create a test file for your helper (in `tests/helpers`) and name it
`{{helperName}}.test.js`

* Test your helper
```javascript
describe(function() {
  it('Should do wonderful things', function(done) {
    // Test
    done();
  });
});
```

> Note: You can run `./create_test.sh {{helperName}}.test.js` to automatically generate a test file in `tests/helpers`.

* Run the tests
```shell
gulp test
```
