import { BiServer } from 'react-icons/bi';
import { defineField } from 'sanity';

const services = {
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: BiServer,
  fields: [
    defineField({
      name: 'heading',
      title: 'Service Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Service Content',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'imgSrcWhite',
      title: 'Image Source (White)',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'imgSrcBlue',
      title: 'Image Source (Blue)',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
  ],
};

export default services;
