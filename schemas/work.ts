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
