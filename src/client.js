import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'c56boupz',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skbhZKgpWs19pvSQq7NreZ5wYbZqBlo5014C0xzRPudxQhYPk23wRTdiVJTrvFPJlEnuMr0zpaqU7N5bk9dKqs8nBhuGVJ1ZVBmRVYlbbbOkJBk8OPm0biuWGLkU916TanAsISVqSfKCuf2ER8DGGt2XcDZqYxF7lhQqEztKR5JcfkfwL4ai',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
