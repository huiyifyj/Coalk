import app from './src/app';

import pkg from './package.json';

new app({
    // element: '',
    apiKey: "AIzaSyCacfaap-c6whB0mQiYoxzYN_1rchuZKJU",
    databaseURL: "https://huiyi-fyj.firebaseio.com"
});

const VERSION = 'v' + pkg.version;

// Print information on the console
console.info(`https://github.com/huiyifyj/comment.js\n%c FYJ VERSION: ${VERSION}`, 'color: #cae5c5; background: #ff8b94;');