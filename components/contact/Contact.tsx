import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
const Contact = () => {
  return (
    <section className=" px-[1.5rem]     bg-white-900 w-full  py-[3rem] dark:bg-black-200 sm:px-[5.3rem]  2xl:px-[15rem] xlPlus:px-[25rem]">
      <div className="mx-auto  mt-6  md:max-w-7xl">
        <ContactHeader />
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-end ">
        <ContactForm />
        <div className="pl-6 md:pt-[-12rem]">
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

export default Contact;
