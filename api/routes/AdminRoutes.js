const express = require('express');
const controller = require('../controllers/AdminController');
const authenticateJwt = require('../utils/middlewares/authenticateJwt');

const AdminRoutes = (app) => {
  const router = express.Router();
  app.use('/api/admin', router);

  router.route('/')
    .post(controller.create);
  router.route('/:id')
    .get(authenticateJwt, controller.show)
    .patch(authenticateJwt, controller.update);
};

module.exports = AdminRoutes;
