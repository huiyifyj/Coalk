import zhCn from './zh-cn';
import en from './en';

export default (language) => {
    return (language == 'zh-cn') ? zhCn : en;
}
