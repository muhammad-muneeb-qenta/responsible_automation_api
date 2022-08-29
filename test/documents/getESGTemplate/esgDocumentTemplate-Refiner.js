require('should');
const { assert } = require('chai');
const supertest = require('supertest');
var config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getEsgTemplateRefiner;

async function getEsgTemplateRefiner(orgType){

    var response = await request 
        .get(`/2.0/esgdocument-template/${orgType}`)
        .expect(200)
            assert.equal(response.body.display_name, orgType);
            assert.ok(response);
}