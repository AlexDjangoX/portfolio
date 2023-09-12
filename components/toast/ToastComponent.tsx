import React from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

const ToastComponent: React.FC<ToastProps> = ({ message, type }) => {
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
