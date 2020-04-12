const express = require('express');

const postRoutes = (app) => {
  const router = express.Router();
  app.use('/api/posts', router);

  router.route('/')
    .get()
    .post();
  router.route('/:slug')
    .get()
    .patch()
    .delete();
};

module.exports = postRoutes;
