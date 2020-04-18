import fetch from 'node-fetch';
import renderApp from '../utils/renderApp';
import config from '../config';

const index = async (req, res, next) => {
  try {
    const api = await (await fetch(`${config.apiUrl}/posts`)).json();
    const state = { blog: api.data };
    const html = renderApp(state, req.url, req.hasManifest, {
      title: 'FrcGustavo | Blog',
      description: 'Hola yo soy gustavo y en este blog encontraras',
      keywords: 'FrcGustavo',
    });
    res.send(html);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  const { slug } = req.params;
  try {
    const api = await (await fetch(`${config.apiUrl}/posts/${slug}`)).json();
    const state = { post: api.data };
    const html = renderApp(state, req.url, req.hasManifest, {
      title: api.data.title,
      description: api.data.description,
      keywords: '',
    });
    res.send(html);
  } catch (error) {
    next(error);
  }
};

export default {
  index,
  show,
};
