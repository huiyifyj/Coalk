const assert = require('assert');

const app = require('../src/app');

describe('APP Test', function () {

    it('APP Test.', function () {
        assert.equal(app(), 'app');
    });

});