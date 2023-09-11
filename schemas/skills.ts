import { BiUser } from 'react-icons/bi';
import { Rule } from '@sanity/types';

const skills = {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: BiUser,
  fields: [
    {
      name: 'skillImage',
      title: 'Skill Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule: Rule) => rule.required(),
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
  ],
};

export default skills;
