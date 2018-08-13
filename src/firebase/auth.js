/**
 * @class Auth
 */
class Auth {

    constructor () {

        this.AUTH = firebase.auth();

        this.test();

    }

    test () {

        this.AUTH.signInWithEmailAndPassword("i@huiyifyj.cn", "commentjs");

    }

}

export default Auth;
