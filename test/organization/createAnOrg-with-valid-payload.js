const { assert } = require('chai');
const supertest = require('supertest');
const config = require('../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = createAnOrg;

async function createAnOrg(id_token, user_id, orgType) {

    const NUM = Math.floor(Math.random() * 100);
    const TOKEN = id_token;

    const TEST_REQUEST = {
        "invited_members":
            [{
                "email": `rgsctest+api` + NUM + `@gmail.com`,
                "role": "admin"
            }],
        "name": orgType + "API" + NUM,
        "type": orgType,
        "can_redeem": false,
        "legalAddress":
        {
            "country": "Pakistan"
        },
        "location":
        {
            "lat": "31.482617",
            "lng": "74.321203"
        },
        "scanTypeConfig": { "nfc_enabled": true, "qrcode_enabled": false },
        "partial_disaggregation": false

    };
    const respConfig = 'kg';
    const respCreated_by = user_id;
    const respName = TEST_REQUEST.name;
    const respStatus = "active";
    const respInvitedMember = TEST_REQUEST.invited_members[0].email;
    return await request
        .post(`/2.0/organization`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp) => {
            assert.ok(resp);
            assert.equal(resp.body.organization.config.weight, respConfig);
            assert.equal(resp.body.organization.name, respName);
            assert.equal(resp.body.organization.invited_members[0].email, respInvitedMember);
            assert.equal(resp.body.organization.status, respStatus);
            assert.equal(resp.body.created_by, respCreated_by);
        });
};