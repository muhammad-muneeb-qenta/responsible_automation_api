const { assert } = require('chai');
const supertest = require('supertest');
const config = require ('../../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = createProduct;

async function createProduct (id_token, company_prefix, productType) {

    const NUM = Math.floor(Math.random() * 100);
    const TOKEN = id_token;
    const PRODUCT_NAME = productType+NUM;
    const ITEM_REFERENCE = Math.floor(Math.random() * 10000);
    const COMPANY_PREFIX = company_prefix;
    const DESCRIPTION = `This is ${PRODUCT_NAME}`;
    
    const TEST_REQUEST = {
	    "company_prefix": COMPANY_PREFIX,
	    "display_name": PRODUCT_NAME,
	    "item_reference": ITEM_REFERENCE,
	    "shared_properties": {
		    "Product Name": PRODUCT_NAME,
		    "Item Reference Number": ITEM_REFERENCE,
		    "Product Description": DESCRIPTION
	},
	    "template_name": productType
    };
    const respgtin_length = 13;
    const respactive = true;
    const respdeleted = false;
    const respcompany_prefix = TEST_REQUEST.company_prefix;
    const respitem_reference = TEST_REQUEST.item_reference;
    const respdisplay_name = PRODUCT_NAME;
    const resptemplate_name = productType;

    return await request 
        .post(`/2.0/product`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp);
            assert.equal(resp.body.gtin_length, respgtin_length);
            assert.equal(resp.body.active, respactive);
            assert.equal(resp.body.deleted, respdeleted);
            assert.equal(resp.body.company_prefix, respcompany_prefix);
            assert.equal(resp.body.item_reference, respitem_reference);
            assert.equal(resp.body.display_name, respdisplay_name);
            assert.equal(resp.body.template_name, resptemplate_name);
        });
};