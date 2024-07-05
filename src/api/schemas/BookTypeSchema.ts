import { z } from '@/api/utils/zod';

// prettier-ignore
export const BookTypeSchema = z
  .enum([
    'FANTASY',
    'FICTION',
    'NON_FICTION',
    'ROMANCE',
    'THRILLER'
  ])
  .openapi('BookType', { description: 'The type of a book' });
  // note: we use openapi() to make this a schema object