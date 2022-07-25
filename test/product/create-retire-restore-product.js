const { assert } = require('chai');
const supertest = require('supertest');
const config = require ('../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = create_retire_restore_Product;

async function create_retire_restore_Product (id_token, org_id, productType) {
    const NUM = Math.floor(Math.random() * 100);
    const TOKEN = id_token;
    const ORG_ID = org_id;
    const PRODUCT_NAME = productType+NUM;
    const ITEM_REFERENCE = Math.floor(Math.random() * 10000);
    const DESCRIPTION = `This is ${PRODUCT_NAME} Product`;

// Get Company Prefix    
    var response1 = await request
        .get(`/2.0/organization/${ORG_ID}`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
    var COMPANY_PREFIX = response1.body.company_prefix;

    const TEST_REQUEST = {
        "asset_schema": {
		"type": "object",
		"required": ["Net Weight (g)"],
		"properties": {
			"Net Weight (g)": {
				"type": "number"
			},
			"Assay - Au (%)": {
				"type": "number"
			},
			"Assay - Ag (%)": {
				"type": "number"
			},
			"Assay - Pt (%)": {
				"type": "number"
			},
			"Assay - Pd (%)": {
				"type": "number"
			},
			"Assay - Other impurities (%)": {
				"type": "number"
			}
		}
	},
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

// Creation of Product
    var response2 = await request 
        .post(`/2.0/product`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
            assert.ok(response2);
    var PRODUCT_ID = response2.body.id;

// Retire Product
    var response3 = await request 
        .post(`/2.0/organization/${ORG_ID}/product/${PRODUCT_ID}/retire`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(201)
            assert.ok(response3);

// Restoration Of Product
    var response4 = await request 
        .post(`/2.0/organization/${ORG_ID}/product/${PRODUCT_ID}/restore`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(201)
            assert.ok(response4);
};