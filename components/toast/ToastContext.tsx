import { createContext, useState, useCallback } from 'react';

import ToastComponent from './ToastComponent';
import { ToastFunction, ToastInterface, ToastProviderInterface } from '@/types';

export const ToastContext = createContext<ToastFunction | undefined>(undefined);

export const ToastProvider = ({ children }: ToastProviderInterface) => {
  const [toastInfo, setToastInfo] = useState<ToastInterface | null>(null);

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
