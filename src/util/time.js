/**
 * Calculate the interval between comments posted and now.
 * And return a string mark interval.
 *
 * @param {Date} time The comment posted time.
 * @param {object} languageTime The object for time language setting.
 * @returns {String} Generat interval time.
 */
const periodTime = (time, languageTime) => {

    const PERIOD = new Date() - time;
    const DAY = Math.floor(PERIOD / (24 * 3600 * 1000));

    if (DAY > 0 && DAY < 7) {
        return DAY + languageTime.day;
    } else if (DAY >= 7 && DAY < 30) {
        return Math.floor(DAY / 7) + languageTime.week;
    } else if (DAY >=30 && DAY < 365) {
        return Math.floor(DAY / 30) + languageTime.month;
    } else if (DAY === 0) {
        const residue1 = PERIOD % (24 * 3600 * 1000);
        const HOUR = Math.floor(residue1 / (3600 * 1000));

        if (HOUR === 0) {
            const residue2 = residue1 % (3600 * 1000);
            const MINUTE = Math.floor(residue2 / (60 * 1000));

            if (MINUTE === 0) {
                const residue3 = residue2 % (60 * 1000);
                const SECOND = Math.round(residue3 / 1000);

                return (SECOND > 5) ?
                    SECOND + languageTime.second :
                    languageTime.now;
            } else {
                return MINUTE + languageTime.minute;
            }

        } else {
            return HOUR + languageTime.hour;
        }

    } else if (DAY >= 365) {
        return Math.floor(DAY / 365) + languageTime.year;
    } else {
        return languageTime.now;
    }

}

/**
 * Format The Date.
 *
 * @param {Date} time The comment posted time.
 * @returns {String} Generat format time.
 */
const formatData = (time) => {

    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes()}`;

}

export default periodTime;