import assert from 'assert';

import md5 from '../../src/util/md5';

// Instance Object for Testing
const me = {
    name: 'huiyifyj',
    email: 'i@huiyifyj.cn',
    url: 'https://huiyifyj.cn'
}

// Related MD5 Hash Value
const md5Hash = {
    name: 'f851f84309625ba941a1c99565039474',
    email: '11b334f003ef029c9d154f5dbae18b44',
    url: 'f9b6a6832f6653ea97b38b1a06ca4929'
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
