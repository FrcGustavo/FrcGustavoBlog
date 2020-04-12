const express = require('express');
const controller = require('../controllers/PostsController');

const postRoutes = (app) => {
  const router = express.Router();
  app.use('/api/posts', router);

  router.route('/')
    .get(controller.index)
    .post(controller.create);
  router.route('/:slug')
    .get(controller.show)
    .patch(controller.update)
    .delete(controller.destroy);
};

module.exports = postRoutes;
