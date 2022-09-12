const { assert } = require('chai');
const supertest = require('supertest');
const config = require ('../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = createAsset;

async function createAsset (id_token, org_id ,company_prefix ,AssetType) {

    const NUM = Math.floor(Math.random() * 100);
    const TOKEN = id_token;
    const ASSET_SERIAL_NUMBER = AssetType+NUM;
    
    const TEST_REQUEST = {
	    "item_reference": "2856",
	    "serial_number": ASSET_SERIAL_NUMBER,
	    "register_asset": true,
	    "properties": {
            "Net Weight (kg)": "10",
            "Assay - Au (%)": "10",
            "Assay - Ag (%)": "10",
            "Assay - Pt (%)": "10",
            "Assay - Pd (%)": "10",
            "Assay - Other impurities (%)": "10"
        },
        "company_prefix": company_prefix,
        "orgId": org_id
}

    return await request 
        .post(`/2.0/asset`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp);
        });
};