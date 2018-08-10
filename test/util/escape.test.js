import assert from 'assert';

import escape from '../../src/util/escape';

// Original string for testing.
const ORIGIN = '/';

// String that is handled.
const HANDLE = '&';

describe('Escape Test', function () {

    it('"/" Converted to MD5 Value Successfully.', function () {
        assert.equal(escape(ORIGIN), HANDLE);
    });

});
