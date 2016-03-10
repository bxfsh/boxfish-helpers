const Handlebars = require('handlebars');
const helpers = require('../dist/boxfish-helpers.js');
const moment = require('moment');

require('colors');

// Register the helpers
Handlebars.registerHelper(helpers);

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

var source;
var template;
var context;

context = {
  // Do not change this
  collection: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  trueValue: true,
  falseValue: false,
  test: 'test',
  yesterday: new Date(new Date().setDate(new Date().getDate() - 1)),
  moment: require('moment'),
  numeral: require('numeral'),
};

// After
describe('After'.green, function () {
  it('should return all elements after the fourth position', function (done) {
    source = '{{after collection 4}}';
    template = Handlebars.compile(source);
    template(context).split(',').should.have.length(4);
    done();
  });
});

// And
describe('And'.green, function () {
  it('should return true for (trueValue && trueValue)', function (done) {
    source = '{{#and trueValue trueValue}}true{{/and}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });

  it('should return false for (falseValue && trueValue)', function (done) {
    source = '{{^and trueValue falseValue}}false{{/and}}';
    template = Handlebars.compile(source);
    template(context).should.equal('false');
    done();
  });
});

describe('arrayContains'.green, function () {
  it('should find \'one\' in the collection', function (done) {
    source = '{{#arrayContains collection "one"}}true{{/arrayContains}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });

  it('should not find \'test\' in the collection', function (done) {
    source = '{{^arrayContains collection "test"}}false{{/arrayContains}}';
    template = Handlebars.compile(source);
    template(context).should.equal('false');
    done();
  });
});

describe('Before'.green, function () {
  it('should return all elements before position one', function (done) {
    source = '{{before collection 1}}';
    template = Handlebars.compile(source);
    template(context).should.equal('one');
    done();
  });
});

describe('Capitalize'.green, function () {
  it('should capitalize a string', function (done) {
    source = '{{capitalize "test"}}';
    template = Handlebars.compile(source);
    template().should.equal('Test');
    done();
  });
});

describe('commaSeparate'.green, function () {
  it('should join an array with commas', function (done) {
    source = '{{commaSeparate collection}}';
    template = Handlebars.compile(source);
    template(context).should.equal('one, two, three, four, five, six, seven, eight');
    done();
  });

  it('should work with \'join\'', function (done) {
    source = '{{join collection}}';
    template = Handlebars.compile(source);
    template(context).should.equal('one, two, three, four, five, six, seven, eight');
    done();
  });

  it('should work with a different separator', function (done) {
    source = '{{join collection "-"}}';
    template = Handlebars.compile(source);
    template(context).should.equal('one-two-three-four-five-six-seven-eight');
    done();
  });
});

describe('Compare'.green, function () {
  it('should compare trueValue === falseValue', function (done) {
    source = '{{#compare trueValue "===" trueValue}}true{{/compare}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });
});

describe('dateHasPassed'.green, function () {
  it('should ensure a date is in the past', function (done) {
    source = '{{#dateHasPassed yesterday}}true{{/dateHasPassed}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });

  it('should work with alternate spelling \'dateHasPast\'', function (done) {
    source = '{{#dateHasPast yesterday}}true{{/dateHasPast}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });
});

describe('defaultValue'.green, function () {
  it('should return a default value', function (done) {
    source = '{{default test "ok"}}';
    template = Handlebars.compile(source);
    template(context).should.equal('test');
    done();
  });

  it('should work with alternate spelling \'default\'', function (done) {
    source = '{{default missing "test"}}';
    template = Handlebars.compile(source);
    template(context).should.equal('test');
    done();
  });
});

describe.skip('eachProperty', function () {

});

describe('eq'.green, function () {
  it('should compare "test" to "test"', function (done) {
    source = '{{#eq test "test"}}true{{/eq}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });

  it('should fail', function (done) {
    source = '{{^eq test "ok"}}true{{/eq}}';
    template = Handlebars.compile(source);
    template(context).should.equal('true');
    done();
  });
});

describe('first'.green, function () {
  it('should return the first 2 elements in the collection', function (done) {
    source = '{{first collection "2"}}';
    template = Handlebars.compile(source);
    template(context).should.equal('one,two');
    done();
  });
});

describe.skip('formatDate'.green, function () {
  it('should return the year', function (done) {
    source = '{{formatDate yesterday "YYYY"}}';
    template = Handlebars.compile(source);
    template(context).should.equal('2016');
    done();
  });

  it('should work with \'moment\'', function (done) {
    source = '{{moment yesterday "YYYY"}}';
    template = Handlebars.compile(source);
    template(context).should.equal('2016');
    done();
  });
});

describe('formatTweet'.green, function () {
  it('should find handles', function (done) {
    source = '{{{formatTweet "@mrkmur"}}}';
    template = Handlebars.compile(source);
    template(context).should.equal("<a href='https://twitter.com/mrkmur'>@mrkmur</a>");
    done();
  });

  it('should find hashtags', function (done) {
    source = '{{{formatTweet "#hashtag"}}}';
    template = Handlebars.compile(source);
    template(context).should.equal("<a href='https://twitter.com/hashtag/hashtag'>#hashtag</a>");
    done();
  });
});

describe.skip('formateTwitterSearch'.green, function () {
});

describe.skip('fromNow'.green, function () {
  it('should return the time from now', function (done) {
    source = '{{fromNow yesterday}}';
    template = Handlebars.compile(source);
    template(context).should.equal('a day ago');
    done();
  });
});

describe.skip('gt'.green, function () {
  it('should test the greater than helper', function (done) {
    done();
  });
});

describe.skip('gte'.green, function () {
  it('should test the greater than or equal to helper', function (done) {
    done();
  });
});

describe.skip('gtlt'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('hasProperty'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('hasPropertyLength'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('itemAtIndex'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('joinObject'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('lowercase'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('math'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('numberItemsWithProperty'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('numberNotDeleted'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('numeral'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('or'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('pluralize'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('removeUnderscores'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('round'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('slugify'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('stringify'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('tmdb'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('today'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('truncate'.green, function () {
  it('todo', function (done) {
    done();
  });
});

describe.skip('uppercase'.green, function () {
  it('todo', function (done) {
    done();
  });
});
