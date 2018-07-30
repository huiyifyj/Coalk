import app from './src/app';

// Import CSS stylesheet
import './src/scss/index.scss';

/**
 * Print information on the console.
 * 'APP_VERSION' is defined in webpack config file.
 */
console.info(`https://github.com/huiyifyj/comment.js\n%c FYJ VERSION: ${APP_VERSION}`, 'color: #cae5c5; background: #ff8b94;');

export default app;