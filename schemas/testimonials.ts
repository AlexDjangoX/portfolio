import { BiComment } from 'react-icons/bi';
import { defineField } from 'sanity';
import { Rule } from '@sanity/types';

const testimonials = {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  icon: BiComment,
  fields: [
    defineField({
      name: 'headingName',
      title: 'Heading Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadingName',
      title: 'Subheading Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'testimonialImage',
      title: 'Testimonial Image',
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
    },
  ],
};

export default testimonials;
