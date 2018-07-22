import assert from 'assert';

import md5 from '../../src/util/md5';

// Instance Object for Testing
const me = {
    name: 'huiyifyj',
    email: 'jxfengyijie@gmail.com',
    url: 'http://huiyifyj.cn'
}

// Related MD5 Hash Value
const md5Hash = {
    name: 'f851f84309625ba941a1c99565039474',
    email: 'c18c2dc71e66820e1d31c2ae1eec5d51',
    url: '5cea194c52a2a7ebff46b2443727bcbd'
}

describe('MD5 Test', function () {

    it('"' + me.name + '" Converted to MD5 Value Successfully.', function () {
        assert.equal(md5(me.name), md5Hash.name);
    });

    it('"' + me.email + '" Converted to MD5 Value Successfully.', function () {
        assert.equal(md5(me.email), md5Hash.email);
    });

    it('"' + me.url + '" Converted to MD5 Value Successfully.', function () {
        assert.equal(md5(me.url), md5Hash.url);
    });

});