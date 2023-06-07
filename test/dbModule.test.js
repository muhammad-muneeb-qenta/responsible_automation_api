const sinon = require('sinon');
const { expect } = require('chai');

// Import the module or function that interacts with the database
const dbModule = require('./config.test');

describe('API Tests', () => {
  let dbMock;

  beforeEach(() => {
    // Create a mock object for the database module
    dbMock = sinon.mock(dbModule);
  });

  afterEach(() => {
    // Restore the original behavior of the database module
    dbMock.restore();
  });

  it('should return mocked data from the database', () => {
    // Define the expected response from the database
    const expectedResult = { id: 1, name: 'John Doe' };

    // Set up the mock to return the expected response
    dbMock.expects('getDataFromDatabase').resolves(expectedResult);

    // Call the function that interacts with the database
    return dbModule.getDataFromDatabase()
      .then((result) => {
        // Verify that the function returned the expected data
        expect(result).to.deep.equal(expectedResult);

        // Verify that the mock was called as expected
        dbMock.verify();
      });
  });

  it('should handle errors from the database', () => {
    // Define the error to be thrown by the database
    const expectedError = new Error('Database connection failed');

    // Set up the mock to throw the expected error
    dbMock.expects('getDataFromDatabase').rejects(expectedError);

    // Call the function that interacts with the database
    return dbModule.getDataFromDatabase()
      .catch((error) => {
        // Verify that the function threw the expected error
        expect(error).to.equal(expectedError);

        // Verify that the mock was called as expected
        dbMock.verify();
      });
  });
});
