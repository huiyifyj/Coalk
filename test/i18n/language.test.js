import assert from 'assert';
import language from '../../src/i18n/language';

import zhCn from '../../src/i18n/zh-cn';
import en from '../../src/i18n/en';

// 'zh-cn' language setting.
const languageZHCN = 'zh-cn';

// 'en' language setting.
const languageEN = 'en';

// other language setting, generates four random lowercase letters.
const languageOther = () => {

    let result = [];

    for (let i = 0; i < 4; i ++) {

        var randomNum = Math.ceil(Math.random() * 25);

        result.push(String.fromCharCode(97 + randomNum));

    }

    return result.join('');

};

describe('Language Test', function () {

    it('"zh-cn" Language Setting Test.', function () {
        assert.equal(language(languageZHCN), zhCn);
    });

    it('"en" Language Setting Test.', function () {
        assert.equal(language(languageEN), en);
    });

    it('Other Language Setting Test.', function () {
        console.log(languageOther())
        assert.equal(language(languageOther), en);
    });

});
