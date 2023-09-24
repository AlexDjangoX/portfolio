import { linkedin, github } from '@/public/assets-png/index';

export const icons = [
  {
    src: linkedin,
    href: 'https://www.linkedin.com/in/alexander-mclachlan-/',
  },
  {
    src: github,
    href: 'https://github.com/AlexDjangoX',
  },
];

export const routes = [
  { path: '/', label: 'Home' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/contact', label: 'Contact' },
];

export const contactFormFields = [
  {
    id: 'name',
    label: 'What is your name?',
    type: 'text',
  },
  {
    id: 'email',
    label: 'What is your email?',
    type: 'email',
  },
  {
    id: 'message',
    label: 'Write something',
    type: 'text',
  },
  {
    id: 'contact',
    label: 'How can we contact you?',
    type: 'text',
  },
];
