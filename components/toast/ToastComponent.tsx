import { ToastInterface } from '@/types';

const ToastComponent = ({ message, type }: ToastInterface) => {
  let bgColor;

  switch (type) {
    case 'error':
      bgColor = 'bg-red-500';
      break;
    case 'success':
      bgColor = 'bg-green-500';
      break;
    case 'info':
      bgColor = 'bg-blue-500';
      break;
    default:
      bgColor = 'bg-gray-500';
  }

  return (
    <div
      className={`fixed right-5 z-50 ${
        bgColor === 'bg-blue-500' ? 'bottom-5' : 'top-36'
      }  rounded-md p-4 text-white ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default ToastComponent;
