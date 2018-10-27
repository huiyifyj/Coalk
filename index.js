import Comment from './src/app';

// Import CSS stylesheet
import './src/scss/index.scss';

/**
 * Print information on the console.
 * 'APP_VERSION' and 'APP_NAME' is defined in webpack config file.
 */
console.info(`%cCoalk%c
Version: ${APP_VERSION}
Copyright © ${new Date().getFullYear()}
Huiyi.FYJ (https://github.com/huiyifyj/Coalk)`,
'font-size: 18px; color: #3b3e43;',
'font-size: 12px; color: rgba(0,0,0,0.38);');

export default Comment;
