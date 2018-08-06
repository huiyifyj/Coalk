import zhCn from './zh-cn';
import en from './en';

export default (lang) => {

    return (lang == 'zh-cn') ? zhCn : en;

}
