"use strict";

class UserStorage{
    static #users = {
        id: ["asdf","test","tpr1003"],
        psword: ["asdf","test","tpr1003"],
        name: ["김철수","김훈","김짱구"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }
}

module.exports = UserStorage;