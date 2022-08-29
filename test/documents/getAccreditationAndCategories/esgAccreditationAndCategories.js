const { assert } = require('chai');
const supertest = require('supertest');
var config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getDataForMiner;

async function getDataForMiner(token_id, orgID){

    var TOKEN = token_id;

    var response = await request 
        .get(`/2.0/organization/${orgID}/esg`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
            assert.ok(response)  
};