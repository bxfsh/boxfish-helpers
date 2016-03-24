// NOTE This test file is meant to run in the browser, not in terminal.
// Open 'test.html' to run the tests

// Register the helpers
Handlebars.registerHelper(helpers);

describe('HELPERS', function() {

  var source;
  var template;
  var context;

  context = {
    // Do not change this
    collection: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
    arr: [{ name: 'Boxfish Helpers' }, { name: 'Mocha' }],
    trueValue: true,
    falseValue: false,
    test: 'test',
    yesterday: new Date(new Date().setDate(new Date().getDate() - 1))
  };

  var numberHelpers = Object.keys(helpers).length;

  console.log(`There are ${numberHelpers} helpers`);

  before(function() {
    should.exist('BoxfishHelpers');
  });

  // After
  describe('After', function () {
    it('should return all elements after the fourth position', function (done) {
      source = '{{after collection 4}}';
      template = Handlebars.compile(source);
      template(context).split(',').should.have.length(4);
      done();
    });
  });

  // And
  describe('And', function () {
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

  describe('arrayContains', function () {
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

  describe('Before', function () {
    it('should return all elements before position one', function (done) {
      source = '{{before collection 1}}';
      template = Handlebars.compile(source);
      template(context).should.equal('one');
      done();
    });
  });

  describe('Capitalize', function () {
    it('should capitalize a string', function (done) {
      source = '{{capitalize "test"}}';
      template = Handlebars.compile(source);
      template().should.equal('Test');
      done();
    });
  });

  describe('Ceil', function() {
    it('should round 5.2 up to 6', function(done) {
      source = '{{ceil 5.2}}';
      template = Handlebars.compile(source);
      template().should.equal('6');
      done();
    });
  });

  describe('commaSeparate', function () {
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

  describe('Compare', function () {
    it('should compare trueValue === falseValue', function (done) {
      source = '{{#compare trueValue "===" trueValue}}true{{/compare}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });
  });

  describe('dateHasPassed', function () {
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

  describe('defaultValue', function () {
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

  describe('eq', function () {
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

  describe('first', function () {
    it('should return the first 2 elements in the collection', function (done) {
      source = '{{first collection "2"}}';
      template = Handlebars.compile(source);
      template(context).should.equal('one,two');
      done();
    });
  });

  describe('floor', function() {
    it('should round 5.9 down to 5', function (done) {
      source = '{{floor 5.9}}';
      template = Handlebars.compile(source);
      template().should.equal('5');
      done();
    });
  });

  describe('formatDate', function () {
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

  describe('formatTweet', function () {
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

  describe.skip('formateTwitterSearch', function () {
  });

  describe('fromNow', function () {
    it('should return the time from now', function (done) {
      source = '{{fromNow yesterday}}';
      template = Handlebars.compile(source);
      template(context).should.equal('a day ago');
      done();
    });
  });

  describe('gt', function () {
    it('10 should be greater than 5', function (done) {
      source = '{{#gt 10 5}}true{{/gt}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });

    it('10 should NOT be greater than 11', function (done) {
      source = '{{^gt 10 11}}true{{/gt}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });
  });

  describe('gte', function () {
    it('12 should be greater than or equal to 12', function (done) {
      source = '{{#gte 12 12}}true{{/gte}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });

    it('12 should NOT be greater than or equal to 15', function (done) {
      source = '{{^gte 12 15}}true{{/gte}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });
  });

  describe('gtlt', function () {
    it('12 should be greater than or less than 10', function (done) {
      source = '{{#gtlt 12 10}}true{{/gtlt}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });

    it('12 should be greater than or less than 20', function (done) {
      source = '{{#gtlt 12 20}}true{{/gtlt}}';
      template = Handlebars.compile(source);
      template(context).should.equal('true');
      done();
    });
  });

  describe('withProperty', function () {
    it('should output all objects in collection with property `name` and value `Mocha`', function (done) {
      source = '{{#withProperty arr "name" "Mocha"}}{{name}}{{/withProperty}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Mocha');
      done();
    });
  });

  describe('hasPropertyLength', function () {
    it('should output number of items with name "Mocha" in a collection', function (done) {
      source = '{{#hasPropertyLength arr "name" "Mocha"}}yes{{/hasPropertyLength}}';
      template = Handlebars.compile(source);
      template(context).should.equal('yes');
      done();
    });
  });

  describe('itemAtIndex', function () {
    it('return the 4th item in a collection', function (done) {
      source = '{{#itemAtIndex collection 5}}{{this}}{{/itemAtIndex}}';
      template = Handlebars.compile(source);
      template(context).should.equal('six');
      done();
    });
  });

  describe.skip('joinObject', function () {
    it('todo', function (done) {
      done();
    });
  });

  describe('lowercase', function () {
    it('should return LOWERCASE in lowercase', function (done) {
      source = '{{lowercase "LOWERCASE"}}';
      template = Handlebars.compile(source);
      template(context).should.equal('lowercase');
      done();
    });
  });

  describe('math', function () {
    it('should handle addition', function (done) {
      source = '{{math 1 "+" 2}}';
      template = Handlebars.compile(source);
      template().should.equal('3');
      done();
    });

    it('should handle subtraction', function (done) {
      source = '{{math 1 "-" 2}}';
      template = Handlebars.compile(source);
      template().should.equal('-1');
      done();
    });

    it('should handle multiplication', function (done) {
      source = '{{math 1 "*" 2}}';
      template = Handlebars.compile(source);
      template().should.equal('2');
      done();
    });

    it('should handle division', function (done) {
      source = '{{math 2 "/" 1}}';
      template = Handlebars.compile(source);
      template().should.equal('2');
      done();
    });
  });

  describe.skip('numberItemsWithProperty', function () {
    it('todo', function (done) {
      done();
    });
  });

  describe('numeral', function () {
    it('should return 150000 as 150k', function (done) {
      source = '{{numeral 150000 "0a"}}';
      template = Handlebars.compile(source);
      template().should.equal('150.0k');
      done();
    });
  });

  describe('or', function () {
    it('should return true', function (done) {
      source = '{{#or true false}}true{{/or}}';
      template = Handlebars.compile(source);
      template().should.equal('true');
      done();
    });

    it('should NOT return true', function (done) {
      source = '{{#or false false}}true{{/or}}';
      template = Handlebars.compile(source);
      template().should.equal('');
      done();
    });
  });

  describe('pluralize', function () {
    it('should pluralize `keyword`', function (done) {
      source = '{{pluralize 5 "keyword"}}';
      template = Handlebars.compile(source);
      template().should.equal('5 keywords');
      done();
    });
  });

  describe('removeUnderscores', function () {
    it('should return this_is_a_string without underscores', function (done) {
      source = '{{removeUnderscores "this_is_a_string"}}';
      template = Handlebars.compile(source);
      template().should.equal('this is a string');
      done();
    });
  });

  describe('round', function () {
    it('should round 5.678 to 6', function (done) {
      source = '{{round 5.678}}';
      template = Handlebars.compile(source);
      template(context).should.equal('6');
      done();
    });
  });

  describe('slugify', function () {
    it('should return "boxfish helpers 1.2" as "boxfish-helpers-1.2"', function (done) {
      source = '{{slugify "boxfish helpers 1.2"}}';
      template = Handlebars.compile(source);
      template().should.equal('boxfish-helpers-1.2');
      done();
    });
  });

  describe('stringify', function () {
    it('should return json as a string', function (done) {
      source = '{{stringify arr}}';
      template = Handlebars.compile(source);
      template(context).should.be.a('string');
      done();
    });
  });

  describe.skip('tmdb', function () {
    it('todo', function (done) {
      done();
    });
  });

  describe('today', function () {
    it('return todays date', function (done) {
      source = '{{today}}';
      template = Handlebars.compile(source);
      template().should.equal(moment().format('lll'));
      done();
    });
  });

  describe('truncate', function () {
    it('Should truncate a string to 7 characters', function (done) {
      source = '{{truncate "This is a string" true 8 "..."}}';
      template = Handlebars.compile(source);
      template(context).should.equal('This is...');
      done();
    });

    it('Should truncate a string without an ellipsis tail', function (done) {
      source = '{{truncate "This is a string" true 8 ""}}';
      template = Handlebars.compile(source);
      template(context).should.equal('This is');
      done();
    });

    it('Should truncate a string without being wordwise', function (done) {
      source = '{{truncate "This is a string" false 9 ""}}';
      template = Handlebars.compile(source);
      template(context).should.equal('This is a');
      done();
    });
  });

  describe('uppercase', function () {
    it('should return uppercase in uppercase', function (done) {
      source = '{{uppercase "uppercase"}}';
      template = Handlebars.compile(source);
      template(context).should.equal('UPPERCASE');
      done();
    });
  });
});
