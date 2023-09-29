'use client';

import { icons } from '@/utils/constants';
import CallIcon from '@/components/icons/CallIcon';
import MessageIcon from '@/components/icons/MessageIcon';
import SocialLinks from '@/components/reusable/SocialLinks';

const ContactDetails = () => {
  return (
    <div>
      <p className="pb-3.5 text-xl font-normal leading-[150%] text-black-300 dark:text-white-900 lg:text-2xl">
        My Socials
      </p>
      <div className="mt-[0.5rem] flex gap-6 pb-9">
        {icons.map((icon) => (
          <SocialLinks
            key={icon.src.toString()}
            iconSrc={icon.src}
            href={icon.href}
          />
        ))}
      </div>
      <p className="pb-3.5 text-xl font-normal leading-[150%] text-black-300 dark:text-white-900 lg:text-2xl">
        Phone Number
      </p>
      <span className="flex flex-row items-center justify-start pb-9 text-xl font-semibold leading-[130%] text-black-400 dark:text-white-800 lg:text-2xl">
        <CallIcon className="h-6 w-6" />
        <p>+44 79 678 66320</p>
      </span>
      <p className="pb-3.5 text-xl font-normal leading-[150%] text-black-300 dark:text-white-900 lg:text-2xl">
        Email Address
      </p>
      <span className="flex flex-row items-center justify-start pb-9 text-xl font-semibold leading-[130%] text-black-400 dark:text-white-800 lg:text-2xl">
        <MessageIcon className="h-6 w-6 pr-2 " />
        <p>alexmonk17@gmail.com</p>
      </span>
    </div>
  );
};

export default ContactDetails;
