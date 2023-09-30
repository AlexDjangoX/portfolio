import { ContactForm, ContactDetails, ContactHeader } from '.';

const Contact = () => (
  <section className="flex w-full flex-col items-center justify-center bg-white-900 py-[3rem] dark:bg-black-200">
    <div className="mt-6 w-full bg-white-900 px-[1.5rem] dark:bg-black-300 sm:px-[5.3rem]">
      <ContactHeader />
    </div>
    <div className="flex flex-col px-[1.5rem] pt-[5rem] sm:px-[5.3rem] lg:flex-row-reverse 2xl:px-[15rem] xlPlus:px-[25rem]">
      <ContactForm />
      <ContactDetails />
    </div>
  </section>
);

export default Contact;
