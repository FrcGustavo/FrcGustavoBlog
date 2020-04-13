const express = require('express');
const controller = require('');

const AdminRoutes = (app) => {
  const router = express.Router();
  app.use('/api/admin', router);

  router.route('/')
    .post(controller.create);
  router.route('/:id')
    .get(controller.show)
    .patch(controller.update);
};

module.exports = AdminRoutes;
