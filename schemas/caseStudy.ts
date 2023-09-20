import { BiUser } from 'react-icons/bi';
import { Rule, defineField } from 'sanity';

const caseStudy = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: BiUser,
  fields: [
    defineField({
      name: 'headingUnderline',
      title: 'Heading Underline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'myRole',
      title: 'My Role',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    defineField({
      name: 'demoSite',
      title: 'Demo Site',
      type: 'string',
    }),
    defineField({
      name: 'sourceCode',
      title: 'Source Code',
      type: 'string',
    }),
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
      ],
    },
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
    }),
    {
      name: 'problemStatementImage',
      title: 'Problem Statement Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'figmaDesign',
      title: 'Figma Design',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'myProcess',
      title: 'My Process',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'processStep',
          title: 'Process Step',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of challenges faced during the project.',
    },
    {
      name: 'learnings',
      title: 'Learnings',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key takeaways from the project.',
    },
    {
      name: 'otherCaseStudies',
      title: 'Other Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Case Study',
          fields: [
            {
              name: 'otherCaseStudyImage',
              title: 'Case Study Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt',
                  type: 'string',
                },
              ],
            },
            {
              name: 'otherCaseStudyHeading',
              title: 'Case Study Heading',
              type: 'string',
            },
            {
              name: 'otherCaseStudyDescription',
              title: 'Case Study Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};

export default caseStudy;
