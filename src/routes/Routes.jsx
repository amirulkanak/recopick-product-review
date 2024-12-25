import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import MyQueriesPage from '../pages/MyQueriesPage';
import AddQueryPage from '../pages/AddQueryPage';
import MyQueryUpdatePage from '../pages/MyQueryUpdatePage';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import AllQueriesPage from '../pages/AllQueriesPage';
import QueryDetailsPage from '../pages/QueryDetailsPage';
import MyRecommendationsPage from '../pages/MyRecommendationsPage';
import RecommendationsForMe from '../pages/RecommendationsForMe';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/queries',
        element: <AllQueriesPage />,
      },
      {
        path: '/query-details/:id',
        element: <QueryDetailsPage />,
      },
      {
        path: '/my-queries',
        element: (
          <PrivateRoute>
            <MyQueriesPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-recommendations',
        element: (
          <PrivateRoute>
            <MyRecommendationsPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/recommendations',
        element: (
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-query',
        element: (
          <PrivateRoute>
            <AddQueryPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/update-query/:id',
        element: (
          <PrivateRoute>
            <MyQueryUpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/forgot-password',
        element: <ForgetPasswordPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default routes;
