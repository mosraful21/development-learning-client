import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import PrivateRoute from './routes/PrivateRoute';
import Info from './components/Info/Info';
import Checkout from './components/Checkout/Checkout';
import FAQ from './components/FAQ/FAQ';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/info/:id',
          element: <Info></Info>,
          loader: ({ params }) => fetch(`https://development-learning-server.vercel.app/info/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
          loader: ({ params }) => fetch(`https://development-learning-server.vercel.app/info/${params.id}`)

        }
      ]
    },
    { path: '*', element: <h1 className='text-4xl text-center'>This route not found, Error 404</h1> }
  ])

  return (
    <div className="">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
