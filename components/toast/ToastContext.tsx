import { createContext, useState, useCallback, ReactNode } from 'react';
import ToastComponent from './ToastComponent';

type ToastFunction = (message: string, type?: 'success' | 'error') => void;

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ToastFunction | undefined>(undefined);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastInfo, setToastInfo] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const showToast: ToastFunction = useCallback((message, type = 'success') => {
    setToastInfo({ message, type });

    setTimeout(() => {
      setToastInfo(null);
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toastInfo && <ToastComponent {...toastInfo} />}
    </ToastContext.Provider>
  );
};
