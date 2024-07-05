import { z } from '@/api/utils/zod';

// prettier-ignore
export const IsbnSchema = z
  .string().regex(/^(?:\d{9}X|\d{10}|\d{13})$/);
  // note: we do not use openapi(), so it won't be a schema object
  // this is merely for re-using the regex constraint on the type
