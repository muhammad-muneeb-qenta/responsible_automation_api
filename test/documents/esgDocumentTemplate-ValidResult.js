require('should');
const supertest = require('supertest');
var config = require ('../../config.json');
const request = supertest(config['BASE_URL']);
