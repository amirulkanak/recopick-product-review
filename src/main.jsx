import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import './styles/globalStyle.css';
import UserAuthContextProvider from './context/UserAuthContext';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        pauseOnFocusLoss
        toastClassName="relative flex p-4 rounded-md justify-between overflow-hidden cursor-pointer"
        bodyClassName="text-sm"
        progressClassName="h-1"
      />
    </UserAuthContextProvider>
  </StrictMode>
);
