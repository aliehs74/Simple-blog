import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import SinglePostPage from '../pages/SinglePostPage';

const routers = [
  { path: '/', element: <HomePage /> },
  { path: '/AboutPage', element: <AboutPage /> },
  { path: '/BlogPage', element: <BlogPage /> },
  { path: '/ContactPage', element: <ContactPage /> },
  { path: '/BlogPage/SinglePostPage/:slug', element: <SinglePostPage className='SinglePostPage' /> },



]
export default routers;