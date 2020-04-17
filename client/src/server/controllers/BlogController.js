import fetch from 'node-fetch';
import renderApp from '../utils/renderApp';

const index = async (req, res, next) => {
  try {
    const api = await (await fetch('http://localhost:8080/api/posts')).json();
    const state = { blog: api.data };
    const html = renderApp(state, req.url)(req.hasManifest);
    res.send(html);
  } catch (error) {
    next(error);
  }
};

export default {
  index,
};
