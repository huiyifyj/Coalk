/**
 * @class Auth
 */
class Auth {

    constructor () {

        this.AUTH = firebase.auth();

        this.test();

    }

    test () {

        this.AUTH.signInAnonymously();

        const a = this.AUTH.currentUser;
        console.log(a);

    }

}

export default Auth;
