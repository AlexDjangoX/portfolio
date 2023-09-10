import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type ResumeType = {
  resumeURL: string;
};

export type MobileNavbarProps = {
  toggleMobile: () => void;
  showMobileNavbar: boolean;
  closeImgSrc: string;
  pathname: string;
};

export type NavbarRoutesProps = {
  pathname: string;
  showMobileNavbar: boolean;
};

export type DeskTopNavbarProps = Omit<MobileNavbarProps, 'closeImgSrc'> & {
  openImgSrc: string;
};
