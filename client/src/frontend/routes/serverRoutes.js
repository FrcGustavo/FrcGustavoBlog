import Blog from '../pages/Blog';
import Home from '../pages/Home';

const routes = [
    { exact: true, path: '/', component: Home },
    { exact: true, path: '/blog', component: Blog }
]

export default routes;