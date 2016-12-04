'use strict'

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {
    * showReg (request, response) {
        yield response.sendView('reg');
    }

    * reg (request, response) {
        const userData = request.except('_csrf');
        const user = new User();
        user.username = userData.username;
        user.password = yield Hash.make(userData.password);
        user.email = userData.email;

        yield user.save();
        yield request.auth.login(user);
        response.redirect('/');
    }

    * showLogin (request, response) {
        yield response.sendView('login');
    }

    * login (request, response) {
        const email = request.input('email');
        const password = request.input('password');

        try {
            const login = yield request.auth.attempt(email, password);
            if(login) {
                response.redirect('/');
            }
        }
        catch (err) {
            yield request.withAll().andWith({ errors: [err]}).flash();
            response.redirect('back');
        }
    }

    * logout(request, response) {
        yield request.auth.logout();
        response.redirect('/');
    }
}

module.exports = UserController
