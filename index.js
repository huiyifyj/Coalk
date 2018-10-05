import Comment from './src/app';

// Import CSS stylesheet
import './src/scss/index.scss';

/**
 * Print information on the console.
 * 'APP_VERSION' is defined in webpack config file.
 */
console.info(`%c${APP_NAME.toUpperCase()}%c
Version: ${APP_VERSION}
Copyright © ${new Date().getFullYear()}
Huiyi.FYJ (https://github.com/huiyifyj/comment.js)`,
'font-size: 18px; color: #3b3e43;',
'font-size: 12px; color: rgba(0,0,0,0.38);');

export default Comment;
