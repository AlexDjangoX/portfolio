'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useForm, FieldError } from 'react-hook-form';

import { schema } from '@/schemas/contactFormZodValidation';
import { FormDataType } from '@/types/index';
import { ToastContext } from '@/components/toast/ToastContext';

export const useContactForm = () => {
  const showToast = useContext(ToastContext);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const getErrorStyle = (error: FieldError | undefined) =>
    error ? 'input-error' : '';

  const getInputStyle = (error: FieldError | undefined) =>
    `input-base input-focus ${getErrorStyle(error)}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: FormDataType) => {
    setLoading(true);

    if (showToast) {
      showToast('Sending email', 'info');
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: 'Alexander Mc Lachlan',
      to_email: 'alexDjangoX@gmail.com',
      message: data.message,
      subject: `Contact from ${data.name}`,
      contact: data.contact,
    };

    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      )
      .then(
        () => {
          router.push('/success-page');
        },
        (error) => {
          setLoading(false);
          console.error(error);
          if (showToast) {
            showToast(
              'Ahh, something went wrong. Please try again later.',
              'error'
            );
          }
        }
      )
      .then(() => {
        reset();
        setLoading(false);
      });
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
    loading,
    errors,
    getErrorStyle,
    getInputStyle,
  };
};

export default useContactForm;
