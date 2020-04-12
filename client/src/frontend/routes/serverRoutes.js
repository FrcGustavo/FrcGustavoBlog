import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Error from '../pages/Error';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
  { name: 'Error', component: Error },
];

export default routes;
