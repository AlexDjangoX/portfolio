import React from 'react';
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

export type Project = {
  _id: string;
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

export type ProjectCardProps = {
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

export type ProjectCardContentProps = {
  heading: string;
  projectName: string;
  technologies: string[];
  buttonBackground: string;
};

export type ProjectCardImageProps = {
  image: string;
  heading: string;
};

export type Testimonial = {
  _id: string;
  headingName: string;
  subheadingName: string;
  content: string;
  testimonialImage: string;
  altText: string;
};

export type CarouselProps = {
  testimonials: Testimonial[];
};

export type ArrowLeftControlProps = {
  onClick: () => void;
  isHiddenOnLg?: boolean;
};

export type ArrowRightControlProps = {
  onClick: () => void;
  isHiddenOnLg?: boolean;
};

export type StarComponentProps = {
  count: number;
};

export type TestimonialDetailsProps = {
  content: string;
  headingName: string;
  subheadingName: string;
  show: boolean;
};

export interface WrapperDark200Props {
  children: React.ReactNode;
}

export type Service = {
  _id: string;
  heading: string;
  content: string;
  whiteImage: string;
  blueImage: string;
};

export type SkillsProps = {
  _id: string;
  image: string;
  altText: string;
};

export interface ClipboardTextProps {
  text: string;
}

export type WorkCardProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
};
