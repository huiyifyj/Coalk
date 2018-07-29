import app from './src/app';

import pkg from './package.json';


const VERSION = 'v' + pkg.version;

// Print information on the console
console.info(`https://github.com/huiyifyj/comment.js\n%c FYJ VERSION: ${VERSION}`, 'color: #cae5c5; background: #ff8b94;');export default app;