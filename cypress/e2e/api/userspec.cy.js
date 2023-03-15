import { user_creation_response_schema, user_filtering_response_schema, user_loging_response_schema } from "../../support/schemas";
import { createwitharray_body, createwitharray_invalid_body, createwitharray_multiple,createwithlist_body, createwithList_multiple, createwithList_invalid_body, createuser_body } from "../../support/requests";

describe('Pet Store User Service', () => {

  context("Create Users With Array Input",()=>{

    //Verify that able to create a single user using single object in array TC_001 (Custome commands added)
   
it('Testing Ability to create a single user with /createuserwitharray endpoint ', () => {
       
  cy.createUserWithArray(createwitharray_body).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Verify response message 
    expect(response.body.message).to.equal("ok");
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
   expect(response.body).to.be.jsonSchema(user_creation_response_schema);
    // Log response
    cy.log(JSON.stringify(response.body));


  })

})

    
    
//Verify that able to create multiple users using multiple user objects TC 002
it('VAbility to create a multiple users with /createuserwitharray endpoint', () => {
  
  cy.createUserWithArray(createwitharray_multiple).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Verify response message 
    expect(response.body.message).to.equal("ok");
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
    expect(response.body).to.be.jsonSchema(user_creation_response_schema);
    // Log response
    cy.log(JSON.stringify(response.body));


  })
    })




    //Verify that not able to create a user , by entering string values for id TC004
    it('Mandatory filed validation in  /createuserwitharray endpoint ', () => {
      cy.createUserWithArray(createwitharray_invalid_body).then(response => {
        // Verify status code
        expect(response.status).to.equal(500);
        // Verify response message 
        expect(response.body.message).to.equal("something bad happened");
        // Response time valiadation
        expect(response.duration).to.not.be.greaterThan(3000)
        // Validate Json schema
        expect(response.body).to.be.jsonSchema(user_creation_response_schema);
        // Log response
        cy.log(JSON.stringify(response.body));
    
    
      })
    })

  })

  context("Create Users With List Input", () => {

    //Verify that able to create a single user using single object TC_010
    it('Ability to create a single user with /createuserwithlist endpoint ', () => {
       
      cy.createUserWithList(createwithlist_body).then(response => {
        // Verify status code
        expect(response.status).to.equal(200);
        // Verify response message 
        expect(response.body.message).to.equal("ok");
        // Response time valiadation
        expect(response.duration).to.not.be.greaterThan(3000)
        // Validate Json schema
        expect(response.body).to.be.jsonSchema(user_creation_response_schema);
        // Log response
        cy.log(JSON.stringify(response.body));


      })

    })

     //Verify that able to create multiple users using multiple user objects TC_011
     it('Ability to create a Multiple users with /createuserwithlist endpoint ', () => {
       
      cy.createUserWithList(createwithList_multiple).then(response => {
        // Verify status code
        expect(response.status).to.equal(200);
        // Verify response message 
        expect(response.body.message).to.equal("ok");
        // Response time valiadation
        expect(response.duration).to.not.be.greaterThan(3000)
        // Validate Json schema
        expect(response.body).to.be.jsonSchema(user_creation_response_schema);
        // Log response
        cy.log(JSON.stringify(response.body));


      })

    })

    //Verify that not able to create a user , by entering string values for id TC_013
    it('Error availability when create a user with Invalid value for userID /createuserwithlist endpoint ', () => {
       
      cy.createUserWithList(createwithList_invalid_body).then(response => {
        // Verify status code
        expect(response.status).to.equal(500);
        // Verify response message 
        expect(response.body.message).to.equal("something bad happened");
        // Response time valiadation
        expect(response.duration).to.not.be.greaterThan(3000)
        // Validate Json schema
        expect(response.body).to.be.jsonSchema(user_creation_response_schema);
        // Log response
        cy.log(JSON.stringify(response.body));


      })

    })

   
  })

  context("Create a User", () => {
//Verify that able to create a user TC_019
it('Ability to create a single user ', () => {
       
  cy.createUserWithArray(createuser_body).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Verify response message 
    expect(response.body.message).to.equal("ok");
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
    expect(response.body).to.be.jsonSchema(user_creation_response_schema);
    // Log response
    cy.log(JSON.stringify(response.body));


  })
})
  })

  context("Get User by user name", () => {

    //Verify that able to filter a user with valid username TC_025
    it(' Verify that able to filter a user with valid username ', () => {
      cy.request({
        method: 'GET',
        url: '/v2/user/madhu9',
        params: [{
          "username": "madhu9"
        }]
  
      }).then(response => {
        // Verify status code
        expect(response.status).to.equal(200);
        // Response time valiadation
        expect(response.duration).to.not.be.greaterThan(3000)
        // Validate Json schema
        expect(response.body).to.be.jsonSchema(user_filtering_response_schema);
        // Log response
       cy.log(JSON.stringify(response.body));
  
      })
  
    })
  })

  context("Logs user into the system", () => {
// Verify that able to login to the system with valid username and password TC_027
it(' Able to login to the system valid credentials ', () => {
  cy.request({
    method: 'GET',
    url: '/v2/user/login?username=madhu9&password=223344',
    params: [{
      "username": "madhu9",
      "password": "223344"
    }]

  }).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
    expect(response.body).to.be.jsonSchema(user_loging_response_schema);
    // Log response
   cy.log(JSON.stringify(response.body));

  })

})

  })

  context("Log out user session", () => {
// Verify that user able to log out from system TC_031
it(' Able to login to the system valid credentials ', () => {
  cy.request({
    method: 'GET',
    url: '/v2/user/logout',
    

  }).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
    expect(response.body).to.be.jsonSchema(user_loging_response_schema);
    // Log response
   cy.log(JSON.stringify(response.body));

  })

})

  })

  context("Update the user", () => {
//Verify that username is able to updated with string value TC_32
it(' Ability to update the username', () => {
  cy.request({
    method: 'GET',
    url: '/v2/user/madhu9',
    Variables:{ 'username': 'madhuUpdated'},
    
    body: [
      {
        "id": 31,
        "username": "madhuUpdated",
        "firstName": "Madhushika9",
        "lastName": "Manamperi9",
        "email": "madhushika@gmail.com",
        "password": "223344",
        "phone": "0777123456",
        "userStatus": 0
      }]
    

  }).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
    expect(response.body).to.be.jsonSchema(user_loging_response_schema);
    // Log response
   cy.log(JSON.stringify(response.body));

  })

})
  })

  context("Delete user", () => {
//Verify that username is able to delete a user TC_35
it(' Ability to delete the user', () => {
  cy.request({
    method: 'DELETE',
    url: 'v2/user/madhu5',
    Variables:{ 'username': 'madhu5'},
    
    

  }).then(response => {
    // Verify status code
    expect(response.status).to.equal(200);
    // Verify response message 
    expect(response.body.message).to.equal("ok");
    // Response time valiadation
    expect(response.duration).to.not.be.greaterThan(3000)
    // Validate Json schema
    expect(response.body).to.be.jsonSchema(user_loging_response_schema);
    // Log response
   cy.log(JSON.stringify(response.body));

  })

})

  })


 
})

