import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'yctvaai6',
  dataset: 'production',
  apiVersion: '2023-09-07',
  useCdn: false,
};

const client = createClient(config);

export default client;
