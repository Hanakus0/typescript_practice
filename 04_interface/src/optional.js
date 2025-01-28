"use strict";
const obj = {
    name: 'Jack',
    nickName: 'Jacky',
};
const namable = {
    name: 'Jack',
    // nickName: 'JJJ',
};
const namableObj = {
    name: 'Jack',
    age: 25,
    greet(message = 'Hello!!') {
        console.log(message);
    }
};
