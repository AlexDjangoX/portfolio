import { StaticImageData } from 'next/image';
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

export type MobileNavbarType = {
  toggleMobile: () => void;
  showMobileNavbar: boolean;
  closeImgSrc: string;
  pathname: string;
};

export type NavbarRoutesType = {
  pathname: string;
  showMobileNavbar: boolean;
};

export type DeskTopNavbarType = Omit<MobileNavbarType, 'closeImgSrc'> & {
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

export type ProjectCardType = {
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

export type ProjectCardContentType = {
  heading: string;
  projectName: string;
  technologies: string[];
  buttonBackground: string;
};

export type ProjectCardImageType = {
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

export type CarouselType = {
  testimonials: Testimonial[];
};

export type ArrowLeftControlType = {
  onClick: () => void;
  isHiddenOnLg?: boolean;
};

export type ArrowRightControlType = {
  onClick: () => void;
  isHiddenOnLg?: boolean;
};

export type StarComponentType = {
  count: number;
};

export type TestimonialDetailsType = {
  content: string;
  headingName: string;
  subheadingName: string;
  show: boolean;
};

export interface WrapperDark200Interface {
  children: React.ReactNode;
}

export type SkillsType = {
  _id: string;
  image: string;
  altText: string;
};

export interface ClipboardTextInterface {
  text: string;
}

export type CaseStudiesCardType = {
  altText: string;
  _id: string;
  heading: string;
  projectName: string;
  subHeading: string;
  image: string;
};

export interface StudyDetailInterface {
  _id: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ProjectDetailsTechStackInterface {
  techStack: StudyDetailInterface[];
}

export interface ChildInterface {
  text: string;
  marks: any[];
}

export interface BlockInterface {
  _key?: string;
  markDefs: any[];
  children: ChildInterface[];
  _type: string;
  style: string;
}

export interface ProjectDetailsDescriptionInterface {
  description: BlockInterface[];
}

export interface ProjectDetailsInterface {
  params: {
    id: string;
  };
}

export type IconType = {
  className?: string;
  height?: number | string;
  width?: number | string;
};

export interface WrapperInterface {
  children: React.ReactNode;
  additionalStyles?: string;
}

export type HeadingType = {
  subHeading: string;
  mainHeading: string;
  additionalStylesMainHeading?: string;
  additionalStylesSubHeading?: string;
};

export type FigmaType = {
  figmaDesignUrl: string;
  figmaDesignAlt: string;
};

export type ProjectDetails = {
  problemStatement: string;
  problemStatementImageUrl: string;
  problemStatementImageAlt: string;
};

export type SingleProcessType = {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export type ProblemStatementType = {
  myProcess: SingleProcessType[];
};

export type ChallengesLearningsType = {
  challenges: string[];
  learnings: string[];
};

export type SectionListType = {
  items: string[];
  title: string;
  iconSrc: StaticImageData;
  color: string;
};

export type CaseStudy = {
  otherCaseStudyHeading: string;
  otherCaseStudyDescription: string;
  otherCaseStudyImageUrl: string;
  otherCaseStudyImageAlt: string;
};

export type OtherCaseStudiesType = {
  otherCaseStudies: CaseStudy[];
};

export type ProjectRoleTimelineType = {
  myRole: string;
  startDate: string;
  endDate: string;
};

export interface ToastInterface {
  message: string;
  type: 'success' | 'error';
}

export type Service = {
  _id: string;
  heading: string;
  content: string;
  whiteImage: string;
  blueImage: string;
};

export type ProjectDetailsHeaderType = {
  headingUnderline: string;
  heading: string;
};

export type ProjectDetailsImageType = {
  imageUrl: string;
  imageAlt: string;
};

export type CardPropType = {
  heading: string;
  content: string;
  imgSrcWhite?: string;
  imgSrcBlue?: string;
};

export type WorkCardType = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
};

export type FooterLinksType = {
  iconSrc: StaticImageData;
  href: string;
};

export type NavbarLinkType = {
  path: string;
  label: string;
  isActive: boolean;
  showMobileNavbar: boolean;
};

export type ChallengesLearningsItemType = {
  text: string;
  title: string;
  iconSrc: any;
};

export type ProcessCardType = {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export type TechSkillIconType = {
  imageUrl: string;
  imageAlt: string;
  id?: string;
};

export interface ProjectCardProps extends Project {
  index: number;
}

export type TechnologyType = {
  tech: string;
  buttonBackground: string;
};

export type ProjectDetailsTopType = {
  headingUnderline: string;
  heading: string;
  imageUrl: string;
  imageAlt: string;
  demoSite: string;
  sourceCode: string;
  myRole: string;
  startDate: string;
  endDate: string;
};
