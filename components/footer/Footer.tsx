import { icons } from '@/utils/constants';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-[1.5rem] py-[3rem] leading-[160%] text-black-400 dark:bg-black-200 dark:text-white-800 md:flex-row md:justify-between md:px-[5.3rem] md:py-[3.25rem] ">
      <p>© 2023 Alexander Mc Lachlan. All rights reserved.</p>
      <div className="mt-[0.5rem] flex gap-6">
        {icons.map((icon) => (
          <FooterLinks
            key={icon.src.toString()}
            iconSrc={icon.src}
            href={icon.href}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
