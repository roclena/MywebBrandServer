import User from '../model/user';

export default class UserServices {
    static async createUser(user) {
        const newUser = User.create(user);
        return newUser;
    }
    static getemail(data) {
        let user;
        if (typeof data === 'string') {
            user = User.findOne({ email: data });
            return user;
        }
    }
    static changepass(data) {
         return User.updateOne({ password: data });
    }
    static getuser(){
        return User.find();
    }
}
