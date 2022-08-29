require('should');
const supertest = require('supertest');
var config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getDataForMiner;

async function getDataForMiner(token_id){

    var TOKEN = token_id;
    var EXPECTED_RESPONSE = {
            "error": "10005",
            "message": "Forbidden"
    };

    var response = await request 
        .get(`/2.0/organization/ygbhy/esg`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(403)
            response.body.should.containEql(EXPECTED_RESPONSE);
    
};