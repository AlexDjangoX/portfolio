'use client';

import { useContactForm } from '@/hooks/useContactForm';

const Contact = () => {
  const { handleFormSubmit, register, handleSubmit, loading, errors } =
    useContactForm();

  return (
    <section className="bg-gray-300">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-6 text-center text-4xl font-extralight tracking-tight text-gray-300 dark:text-white">
          Contact Form
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          noValidate
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              What is your name?
            </label>
            <input {...register('name')} type="text" className="" />
            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              What is your email?
            </label>
            <input
              {...register('email')}
              type="email"
              className=""
              placeholder="yourEmail@gmail.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Write something
            </label>
            <textarea
              {...register('message')}
              className=""
              placeholder="Your message here..."
            />
            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message.message as string}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              How can we contact you?
            </label>
            <input
              {...register('contact')}
              type="text"
              className=""
              placeholder="Email or Phone"
            />
            {errors.contact && (
              <p className="text-sm text-red-500">
                {errors.contact.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-between">
            <button type="submit" className="">
              Send
            </button>
            {loading && <p className="">Sending email...</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
