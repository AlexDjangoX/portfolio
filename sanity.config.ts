import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
// import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'sanity-portfolio',
  title: 'Sanity Portfolio',
  projectId: 'yctvaai6',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool(),
    // googleMapsInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});
