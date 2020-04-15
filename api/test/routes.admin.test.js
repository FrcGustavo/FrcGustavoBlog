const assert = require('assert');
const proxyquire = require('proxyquire');
const testServer = require('../utils/testServer');

describe('routes - admin', () => {
  const controller = proxyquire('../controllers/AdminController', {
    '../services/AdminService':
  });
  const route = proxyquire('../routes/AdminRoutes', {
    '../controllers/AdminController': controller
  });

  const request = testServer(route);

  describe('GET /admin/:id', () => {
    it('should response with status code 200', (done) => {
      request.get('/api/admin').expect(200, done);
    });
  });
});