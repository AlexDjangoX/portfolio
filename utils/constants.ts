import { linkedin, github } from '@/public/assets-png/index';
import { TagTypeMapping } from '@/types';
import { motion } from 'framer-motion';

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
    component: 'input',
  },
  {
    id: 'email',
    label: 'What is your email?',
    type: 'email',
    component: 'input',
  },
  {
    id: 'message',
    label: 'Write something',
    type: 'text',
    component: 'textarea',
  },
  {
    id: 'contact',
    label: 'How can we contact you?',
    type: 'text',
    component: 'input',
  },
];

export const tagTypeMapping: TagTypeMapping = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  div: motion.div,
};
