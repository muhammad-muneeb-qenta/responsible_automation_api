require('should');
const supertest = require('supertest');
const config = require ('../../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = createProduct;

async function createProduct (id_token, company_prefix, productType) {

    const NUM = Math.floor(Math.random() * 100);
    const TOKEN = id_token;
    const PRODUCT_NAME = productType+NUM;
    const ITEM_REFERENCE = 1230203201;
    const COMPANY_PREFIX = company_prefix;
    const DESCRIPTION = `This is ${PRODUCT_NAME}`;
    
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
    const EXPECTED_RESPONSE = {
		"error": "10001",
		"message": "Invalid Properties",
		"detail": "[ { property: 'item_reference',\n    error_message: 'The item reference must be all digits and, when concatenated with the company prefix, should have a length of 12' } ]"
	};

    return await request 
        .post(`/2.0/product`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(400)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};