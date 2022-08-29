require('should');
const supertest = require('supertest');
var config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getData;

async function getData(org_id){

    var EXPECTED_RESPONSE = {
            "error": "10004",
            "message": "Not Authorized"
    };

    var response = await request 
        .get(`/2.0/organization/${org_id}/esg`)
        .expect(401)
            response.body.should.containEql(EXPECTED_RESPONSE);
    
};