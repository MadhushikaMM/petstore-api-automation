
const createwitharray_body = [
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) +"@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];

const createwitharray_invalid_body = [
    {
        "id": "INVALID",
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];

const createwitharray_multiple = [
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) + "@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    },
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu1",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) + "@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];

const createwithlist_body = [
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) + "@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];
const createwithList_multiple = [
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) + "@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    },
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu1",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) + "@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];

const createwithList_invalid_body = [
    {
        "id": "INVALID",
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];

const createuser_body = [
    {
        "id": Math.floor(Math.random() * 10000),
        "username": "madhu",
        "firstName": "Madhushika",
        "lastName": "Manamperi",
        "email": "madhushika" + Math.floor(Math.random() * 10000) + "@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
    }
];

function getCreateWithArrayBody(){
   
}

module.exports = { createwitharray_body, createwithlist_body, createwitharray_multiple, createwitharray_invalid_body, createwithList_multiple, createwithList_invalid_body, createuser_body };