const { assert } = require('chai');
const supertest  = require ('supertest');
const config = require('../../../config.json');
require('should')

const request = supertest(config['BASE_URL']);

module.exports = postAccreditationDataWithCatSubcatForMiner ; 

async function postAccreditationDataWithCatSubcatForMiner (token_id, org_id) {

    var TOKEN = token_id ; 
    var TEST_REQUEST = {
    "organization_id": org_id,
    "accreditation_data": [
            "mna1",
            "mna2",
            "mna3",
            "mna4"
        ],
        "categories": [
            "mncat1",
            "mncat2"
        ],
        "sub_categories": [
            "mnsbcat1",
            "mnsbcat2",
            "mnsbcat3",
            "mnsbcat5"
        ]
    }

    const respAccreditation_data0 = TEST_REQUEST.accreditation_data[0];
    const respAccreditation_data1 = TEST_REQUEST.accreditation_data[1];
    const respcat_data1 = TEST_REQUEST.categories[0];
    const respcat_data2 = TEST_REQUEST.categories[1];
    const respSubCat_data1 = TEST_REQUEST.sub_categories[0];
    const respSubCat_data2 = TEST_REQUEST.sub_categories[1];
    const respOrganization_id = org_id;

    return await request
        .post(`/2.0/organization/${org_id}/esg`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp)
            assert.equal(resp.body.accreditation_data[0], respAccreditation_data0);
            assert.equal(resp.body.accreditation_data[1], respAccreditation_data1);
            assert.equal(resp.body.categories[0], respcat_data1);
            assert.equal(resp.body.categories[1], respcat_data2);
            assert.equal(resp.body.sub_categories[0], respSubCat_data1);
            assert.equal(resp.body.sub_categories[1], respSubCat_data2);
            assert.equal(resp.body.organization_id, respOrganization_id);
        })
};