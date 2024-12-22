import { toast } from 'react-toastify';

// Common notification function
const notify = {
  success: (message) => {
    toast.success(message, {
      className:
        'bg-eminence-100 text-red-800 border-l-4 border-eminence-500 shadow-lg rounded-md',
      bodyClassName: 'font-medium',
      progressClassName: 'bg-eminence-100',
      icon: '✅',
    });
  },
  error: (message) => {
    toast.error(message, {
      className:
        'bg-red-100 text-red-800 border-l-4 border-red-500 shadow-lg rounded-md',
      bodyClassName: 'font-medium',
      progressClassName: 'bg-red-500',
      icon: '❌',
    });
  },
  info: (message) => {
    toast.info(message, {
      className:
        'bg-blue-100 text-blue-800 border-l-4 border-blue-500 shadow-lg rounded-md',
      bodyClassName: 'font-medium',
      progressClassName: 'bg-blue-500',
      icon: 'ℹ️',
    });
  },
  warning: (message) => {
    toast.warn(message, {
      className:
        'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 shadow-lg rounded-md',
      bodyClassName: 'font-medium',
      progressClassName: 'bg-yellow-500',
      icon: '⚠️',
    });
  },
};

export default notify;
