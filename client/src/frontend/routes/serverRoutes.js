import Blog from '../pages/Blog';
import Post from '../pages/Post';
import Home from '../pages/Home';
import Error from '../pages/Error';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/:slug', component: Post },
  { name: 'Error', component: Error },
];

export default routes;
