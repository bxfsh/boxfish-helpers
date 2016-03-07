![Boxfish](https://s3.amazonaws.com/cdn.boxfish.com/logos/boxfish-blue.png)

# Boxfish Helpers
Reusable Mustache / Handlebars helpers for Boxfish projects.

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
for (var helper in BoxfishHelpers) {
  if (typeof BoxfishHelpers[helper] === 'function') {
    can.mustache.registerHelper(helper, BoxfishHelpers[helper]);
  }
}
```

Handlebars
```javascript
for (var helper in BoxfishHelpers) {
  if (typeof BoxfishHelpers[helper] === 'function') {
    Handlebars.registerHelper(helper, BoxfishHelpers[helper]);
  }
}
```

## Docs
Docs for helpers coming soon.

## Contributing
The helper functions are located in `./helpers` as individual ES6 JavaScript files.

To add a new helper:

1. Create a new js file in `helpers`
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

2. Run Gulp to build the helpers:
```shell
gulp
```

or use `gulp watch` to automatically build when you make changes

3. Create a test file for your helper (in `tests/helpers`) and name it
`{{helperName}}.test.js`

4. Test your helper
```javascript
describe(function() {
  it('Should do wonderful things', function(done) {
    // Test
    done();
  });
});
```

> NOTE You can also run `./create_test.sh {{helperName}}.test.js` to
automatically generate a test file in `tests/helpers`

5. Run the tests
```shell
gulp test
```
