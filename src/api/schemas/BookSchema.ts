import { z } from '@/api/utils/zod';
import { BookTypeSchema, IsbnSchema } from '@/api/schemas';

// prettier-ignore
export const BookSchema = z
  .object({
    id: z.number().int().openapi({ description: 'The unique identifier of the book.', example: 1 }),
    isbn: IsbnSchema.openapi({ description: 'The unique ISBN of the book.', example: '978-0-7475-3269-9' }),
    title: z.string().openapi({ description: 'The title of the book.', example: 'Harry Potter and the Philosopher\'s Stone' }),
    type: BookTypeSchema.openapi({ description: 'The type of the book.', example: 'FANTASY' }),
    author: z.string().openapi({ description: 'The author of the book.', example: 'J. K. Rowling' }),
  })
  .openapi('Book', { description: 'Representation of a book.' });

export type BookResource = z.infer<typeof BookSchema>;
