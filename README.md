# Boxfish Helpers
Reusable Mustache / Handlebars helpers for Boxfish projects.

## Docs
Docs can be found here: http://bxfsh.github.io/boxfish-helpers/

Use `npm run deploy` to update the github docs if changes have been made to the docs folder.

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
if ('BoxfishHelpers' in window) {
  for (var helper in BoxfishHelpers) {
    can.mustache.registerSimpleHelper(helper, BoxfishHelpers[helper]);  
  }
}
```

For versions of CanJS <2.3.0, you will have to manually create the `registerSimpleHelper` to auto-compute the arguments of each helper.

```javascript
;(function(global) {

  if (global.hasOwnProperty('can')) {
  
  // Add simpleHelper functionality to compute all helper arguments
  can.view.simpleHelper = function (fn) {
    return function () {
      var realArgs = [];
      can.each(arguments, function (val, i) {
        if (i <= arguments.length) {
          while (val && val.isComputed) {
            val = val();
          }

          realArgs.push(val);
        }
      });

      return fn.apply(this, realArgs);
    };
  };

  // registerSimpleHelper helper
  can.mustache.registerSimpleHelper = function (name, fn) {
    can.mustache.registerHelper(name, can.view.simpleHelper(fn));
  };
}
})(this);
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

> Note: A function comment is required for every helper as the docs are auto-generated.

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

### Gulp Tasks

* `gulp default`
clean > babel > browserify > sass-docs

* `gulp build`
default > min

* `gulp watch`
'helpers/*.js' > default
'docs/sass/*.scss' > sass-docs
'docs/index.hbs' > docs
