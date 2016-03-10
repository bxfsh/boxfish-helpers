var helpers = require('../../js/main.js');
var chai = require('chai');
describe('toLowerCase', function() {
  it('should return a lower case string', function(done) {
		var loweredString = helpers.toLowerCase('SimpleTest');
		chai.expect(loweredString)
			.to.be.an('string')
			.and.to.be.eq('simpletest');
    done();
  });
});
