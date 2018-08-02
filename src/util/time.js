/**
 * Handle time and date.
 */
export default {

    /**
     * Calculate the interval between comments posted and now.
     * And return a string mark interval.
     *
     * @param {Date} time The comment posted time.
     * @param {object} langTime The object for time language setting.
     * @returns {String} Generat interval time.
     */
    intervalTime: (time, langTime) => {

        const NOW = new Date();

        let PERIOD = NOW - time;

        var days = Math.floor(PERIOD / (24 * 3600 * 1000));
        if (days === 0) {

            var leave1 = PERIOD % (24 * 3600 * 1000);
            var hours = Math.floor(leave1 / (3600 * 1000));

            if (hours === 0) {

                var leave2 = leave1 % (3600 * 1000);
                var minutes = Math.floor(leave2 / (60 * 1000));

                if (minutes === 0) {

                    var leave3 = leave2 % (60 * 1000);
                    var seconds = Math.round(leave3 / 1000);

                    return seconds + langTime.second;
                }
                return minutes + langTime.minute;
            }
            return hours + langTime.hour;
        }
        
        if (days < 0) {
            return langTime.now;
        }

        if (days < 8) {
            return days + langTime.day;
        } else {
            // return formatData(time);
            return 'Long';
        }

    },

    /**
     * Format The Date.
     *
     * @param {Date} time The comment posted time.
     * @returns {String} Generat format time.
     */
    formatData: (time) => {

        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes()}`;

    }

}