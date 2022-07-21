const { assert } = require('chai');
const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getProductList;

async function getProductList (id_token, org_id) {

    const TOKEN = id_token;
    const ORG_ID = org_id;
    const SEARCH_VALUE = "Dore";

    return await request 
    .get(`/2.0/organization/${ORG_ID}/product?uses_template=true&_searchkey=display_name&_searchval=${SEARCH_VALUE}`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .expect(200)
    .then((resp)=>{
        assert.ok(resp);
    });
};