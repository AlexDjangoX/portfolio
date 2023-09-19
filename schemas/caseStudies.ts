import { BiBriefcase } from 'react-icons/bi';
import { Rule } from '@sanity/types';

const caseStudies = {
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  icon: BiBriefcase,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subHeading',
      title: 'Subheading',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule: Rule) => rule.required(),
          description: 'A short description of the image for accessibility.',
        },
      ],
      validation: (rule: Rule) => rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
};

export default caseStudies;
