import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size={5} />
      </div>
    );
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth/login" state={pathname} replace />
  );
};

export default PrivateRoute;
