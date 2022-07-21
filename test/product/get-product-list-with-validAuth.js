const { assert } = require('chai');
const supertest = require('supertest');
const config = require ('.././../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getProductList;

async function getProductList (id_token, org_id) {

    const TOKEN = id_token;
    const ORG_ID = org_id;

    return await request 
    .get(`/2.0/organization/${ORG_ID}/product`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .expect(200)
    .then((resp)=>{
        assert.ok(resp);
    });
};