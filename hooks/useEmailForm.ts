import { useState, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  email: string;
  subject: string;
  message: string;
}

interface UseEmailFormReturnType {
  formData: FormData;
  loading: boolean;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFormSubmit: (event: any) => Promise<void>;
}

const useEmailForm = (): UseEmailFormReturnType => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.email,
      to_name: 'Alexander Mc Lachlan',
      from_email: formData.email,
      to_email: 'alexdjangox@gmail',
      message: formData.message,
      subject: formData.subject,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert('Thank you. I will get back to you as soon as possible.');
      setFormData({
        email: '',
        message: '',
        subject: '',
      });
    } catch (error) {
      console.error(error);
      alert('Ahh, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, handleInputChange, handleFormSubmit };
};

export default useEmailForm;
