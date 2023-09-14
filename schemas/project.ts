import { BiBriefcase } from 'react-icons/bi';
import { Rule } from '@sanity/types';

const projects = {
  name: 'projects',
  title: 'Projects',
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
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of technologies used in the project.',
      validation: (rule: Rule) => rule.min(1),
    },
    {
      name: 'projectImage',
      title: 'Project Image',
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

export default projects;
