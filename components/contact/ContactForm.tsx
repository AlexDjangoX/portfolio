'use client';

import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = () => {
  const { handleFormSubmit, register, handleSubmit, loading, errors } =
    useContactForm();

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="w-full px-6 py-12 md:pl-16 md:pt-0"
    >
      <div className="max-w-[21.6rem] s:max-w-[35rem] md:max-w-[40rem]">
        <label
          htmlFor="name"
          className="mb-4 block text-lg font-normal leading-[160%] text-black-300 dark:text-white-900 md:text-xl"
        >
          What is your name?
        </label>
        <input
          {...register('name')}
          type="text"
          className="mb-9 block h-[3.75rem] w-full rounded-md bg-white-800 dark:bg-black-300 md:h-[5rem]"
        />
        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message as string}
          </p>
        )}
      </div>

      <div className="max-w-[21.6rem] s:max-w-[35rem] md:max-w-[40rem]">
        <label
          htmlFor="email"
          className="mb-4 block text-lg font-normal leading-[160%] text-black-300 dark:text-white-900 md:text-xl"
        >
          What is your email?
        </label>
        <input
          {...register('email')}
          type="email"
          className="mb-9 block h-[3.75rem] w-full rounded-md bg-white-800 dark:bg-black-300 md:h-[5rem]"
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message as string}
          </p>
        )}
      </div>

      <div className="max-w-[21.6rem] s:max-w-[35rem] md:max-w-[40rem]">
        <label
          htmlFor="message"
          className="mb-4 block text-lg font-normal leading-[160%] text-black-300 dark:text-white-900 md:text-xl"
        >
          Write something
        </label>
        <textarea
          {...register('message')}
          className="mb-9 block h-[11.75rem] w-full rounded-md bg-white-800 dark:bg-black-300 md:h-[5rem]"
        />
        {errors.message && (
          <p className="text-sm text-red-500">
            {errors.message.message as string}
          </p>
        )}
      </div>

      <div className="max-w-[21.6rem] s:max-w-[35rem] md:max-w-[40rem]">
        <label
          htmlFor="contact"
          className="mb-4 block text-lg font-normal leading-[160%] text-black-300 dark:text-white-900 md:text-xl"
        >
          How can we contact you?
        </label>
        <input
          {...register('contact')}
          type="text"
          className="mb-9 block h-[3.75rem] w-full rounded-md bg-white-800 dark:bg-black-300 md:h-[5rem]"
        />
        {errors.contact && (
          <p className="text-sm text-red-500">
            {errors.contact.message as string}
          </p>
        )}
      </div>

      <div className="flex max-w-[21.6rem] flex-wrap justify-between s:max-w-[40rem]">
        <button
          type="submit"
          className="w-full min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:text-[1.125rem]"
        >
          Send
        </button>
        {loading && <p className="">Sending email...</p>}
      </div>
    </form>
  );
};

export default ContactForm;
