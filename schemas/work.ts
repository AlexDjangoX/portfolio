import { BiBriefcase } from 'react-icons/bi';
import { Rule } from 'sanity';

const work = {
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: BiBriefcase,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A short summary or subtitle for the work item.',
    },
    {
      name: 'certificateLink',
      title: 'Certificate Link',
      type: 'string',
    },
    {
      name: 'certified',
      title: 'Certified',
      type: 'boolean',
      description: 'Does this course carry a certification?',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'imgSrc',
      title: 'Image Source',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'A short description of the image for accessibility.',
        },
      ],
      options: {
        hotspot: true,
      },
    },
  ],
};

export default work;
