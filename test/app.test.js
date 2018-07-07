import assert from 'assert';

import app from '../src/app';

describe('APP Test', function () {

    it('APP Test.', function () {
        assert.equal(app(), 'app');
    });

});