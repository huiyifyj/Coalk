import assert from 'assert';

import time from '../../src/util/time';

import languageTime from '../../src/i18n/lang';

const lang = languageTime('en').time;

/**
 * @type {Date} Now time.
 */
const NOW = new Date();

const DAY = NOW.getDay();
const MONTH = NOW.getMonth();
const YEAR = NOW.getFullYear();

// Display 'now', if <5s
const RECENT_PERIOD_TIME = NOW - 4999;
const SECOND_PERIOD_TIME = NOW - 8999;
const MINUTE_PERIOD_TIME = NOW - 1000 * 60;
const HOUR_PERIOD_TIME = NOW - 1000 * 3600;

/**
 * TO DO.
 */
    // const DAY_PERIOD_TIME = new Date().getTime();
    //   WEEK_PERIOD_TIME,
    //   MONTH_PERIOD_TIME,
    //   YEAR_PERIOD_TIME;

    // console.log(DAY_PERIOD_TIME)
    // console.log(time(HOUR_PERIOD_TIME,lang))
    // console.log(NOW.toLocaleDateString())

describe('Time Test', function () {

    it('Display "now", if <5s.', function () {
        assert.equal(time(RECENT_PERIOD_TIME, lang), 'now');
    });

    it('Display "seconds ago", if >5s.', function () {
        assert.equal(time(SECOND_PERIOD_TIME, lang), '9 seconds ago');
    });

    it('Display "minutes ago", if within 1 minute.', function () {
        assert.equal(time(MINUTE_PERIOD_TIME, lang), '1 minutes ago');
    });

    it('Display "hours ago", if within 1 hour.', function () {
        assert.equal(time(HOUR_PERIOD_TIME, lang), '1 hours ago');
    });

});
