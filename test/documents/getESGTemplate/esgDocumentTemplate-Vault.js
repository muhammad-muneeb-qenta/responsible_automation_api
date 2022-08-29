require('should');
const { assert } = require('chai');
const supertest = require('supertest');
var config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getEsgTemplateVault;

async function getEsgTemplateVault(orgType){

    var EXPECTED_RESPONSE = {
        "error": "10020",
        "message": "Not Found",
        "detail": "Instance not found. Entity 'Custody_EsgdocumentTemplate' with id '\"{ display_name: 'vault' }\"'."
    }

    var response = await request 
        .get(`/2.0/esgdocument-template/${orgType}`)
        .expect(404)
            response.body.should.containEql(EXPECTED_RESPONSE);            
}