import { ToastInterface } from '@/types';

const ToastComponent = ({ message, type }: ToastInterface) => {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div
      className={`fixed right-5 top-36 rounded-md p-4 text-white ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default ToastComponent;
