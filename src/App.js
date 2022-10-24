import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Theme from './components/Theme/Theme';
import PrivateRoute from './routes/PrivateRoute';

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
          element: <PrivateRoute> <Courses></Courses> </PrivateRoute>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
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
          path: 'theme',
          element: <Theme></Theme>
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
