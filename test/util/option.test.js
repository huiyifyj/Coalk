import assert from 'assert';

const origin = {
    cdn: 'https://gravatar.loli.net/avatar/',
    apiKey: 'TestAPIKEY',
    databaseURL: 'Test.firebaseio.com',
    domain: 'http://huiyifyj.cn',
    path: '/'
}

const TESTED = {
    cdn: 'https://gravatar.loli.net/avatar/',
    apiKey: 'TestAPIKEY',
    databaseURL: 'Test.firebaseio.com',
    domain: 'http://huiyifyj.cn',
    path: '/'
}

describe('Option Test', function () {

    it('Handle Option Successfully.', function () {

        assert.equal((typeof origin),(typeof TESTED));

    });

});
