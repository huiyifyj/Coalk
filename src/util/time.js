/**
 * Time Class
 */
class Time {

    /**
     * Constructor Function
     *
     * @param {Data} time - The time of comment posted.
     * @constructor
     */
    constructor (time) {
        this.time = time;
    }

    /**
     * Calculate the interval between comments posted and now.
     * And return a string mark interval.
     * 
     * @param {Date} time - The comment posted time
     * @returns {String} Generat interval time
     */
    intervalTime (time) {

        let POST_TIME = time.getTime();
        let NOW_TIME = new Date().getTime();
        let INTERVAL_TIME = NOW_TIME - POST_TIME;

        var days = Math.floor(INTERVAL_TIME / (24 * 3600 * 1000));
        if (days === 0) {

            var leave1 = INTERVAL_TIME % (24 * 3600 * 1000);
            var hours = Math.floor(leave1 / (3600 * 1000));

            if (hours === 0) {

                var leave2 = leave1 % (3600 * 1000);
                var minutes = Math.floor(leave2 / (60 * 1000));

                if (minutes === 0) {

                    var leave3 = leave2 % (60 * 1000);
                    var seconds = Math.round(leave3 / 1000);

                    return seconds + ' 秒前';
                }
                return minutes + ' 分钟前';
            }
            return hours + ' 小时前';
        }
        
        if (days < 0) { return '刚刚' };

        if (days < 8) {
            return days + ' 天前';
        } else {
            return formatData(time);
        }

    }

    /**
     * Format The Date.
     * 
     * @param {Date} time - The comment posted time
     * @returns {String} Generat format time
     */
    formatData (time) {

        let DAY = time.getDate();
        let MONTH = time.getMonth() + 1;
        let YEAR = time.getFullYear();

        return `${YEAR}-${MONTH}-${DAY}`;

    }

}

export default Time;