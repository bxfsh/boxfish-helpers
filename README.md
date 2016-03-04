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

## Contributing
The helper functions are located in `./helpers` as individual ES6 JavasScript files.

To add a new helper:

1. Create a new file in `helpers`
```javascript
export function HelperName(args, options) {
  if (args) {
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

or use `gulp watch` to build in development when you make changes.
