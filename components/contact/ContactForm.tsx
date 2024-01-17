'use client';
import { Button } from '@nextui-org/react';

import { useContactForm } from '@/hooks/useContactForm';
import ContactField from './ContactField';
import { contactFormFields } from '@/utils/constants';

const ContactForm = () => {
  const {
    handleFormSubmit,
    register,
    handleSubmit,
    loading,
    errors,
    getInputStyle,
  } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="w-full px-6 py-12 md:pl-16 md:pt-0"
    >
      {contactFormFields.map((field) => (
        <ContactField
          key={field.id}
          id={field.id}
          component={field.component}
          label={field.label}
          type={field.type}
          register={register}
          errors={errors}
          getInputStyle={getInputStyle}
        />
      ))}

      <div className="flex max-w-[21.6rem] flex-wrap  justify-end s:max-w-[40rem]">
        <Button
          {...(loading && { isLoading: true })}
          type="submit"
          className=" w-full min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:max-w-[8rem] md:text-[1.125rem]"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
