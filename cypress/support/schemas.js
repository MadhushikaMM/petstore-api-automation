
const user_creation_response_schema = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer"
        },
        "type": {
            "type": "string"
        },
        "message": {
            "type": "string"
        }
    },
    "required": [
        "code",
        "type",
        "message"
    ]
};

const user_filtering_response_schema = {
  "type": "object",
"properties": {
  "id": {
    "type": "integer"
  },
  "username": {
    "type": "string"
  },
  "firstName": {
    "type": "string"
  },
  "lastName": {
    "type": "string"
  },
  "email": {
    "type": "string"
  },
  "password": {
    "type": "string"
  },
  "phone": {
    "type": "string"
  },
  "userStatus": {
    "type": "integer"
  }
},
"required": [
  "id",
  "username",
  "firstName",
  "lastName",
  "email",
  "password",
  "phone",
  "userStatus"
]
};

const user_loging_response_schema = {
  "type": "object",
"properties": {
  "code": {
    "type": "integer"
  },
  "type": {
    "type": "string"
  },
  "message": {
    "type": "string"
  }
},
"required": [
  "code",
  "type",
  "message"
]
};
module.exports = { user_creation_response_schema, user_filtering_response_schema, user_loging_response_schema };

