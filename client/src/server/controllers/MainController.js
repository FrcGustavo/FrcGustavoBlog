import fetch from 'node-fetch';
import renderApp from '../utils/renderApp';
import config from '../config';

const index = async (req, res, next) => {
  try {
    const api = await (await fetch(`${config.apiUrl}/posts/i-dont-know-write-for-web`)).json();
    const state = api.data;
    const html = renderApp(state, req.url, req.hasManifest, {
      title: 'FrcGustavo',
      description: 'Hola soy Gustavo, desarrollador con JavaScript, me gusta aprender cosas nuevas todos los dias',
      keywords: 'FrcGustavo, Blog, Desarrollador, JavaScript, Frontend, Backend',
    });
    res.send(html);
  } catch (error) {
    next(error);
  }
};

export default {
  index,
};
