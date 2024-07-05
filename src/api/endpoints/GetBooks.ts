import { OpenAPIRoute } from 'chanfana';
import { z } from '@/api/utils/zod';
import { BookSchema } from '@/api/schemas';

export class GetBooks extends OpenAPIRoute {
  schema = {
    summary: 'Retrieves a list of books.',
    description: 'Retrieves a list of books.',
    tags: ['Books'],
    operationId: 'get-books',
    responses: {
      '200': {
        description: 'Books response.',
        content: {
          'application/json': {
            schema: z.array(BookSchema),
          },
        },
      },
    },
  };

  async handle(request: Request) {
    const books = [
      {
        id: 1,
        isbn: '978-0-7475-3269-9',
        title: "Harry Potter and the Philosopher's Stone",
        type: 'FANTASY',
        author: 'J. K. Rowling',
      },
    ];
    return BookSchema.array().parse(books);
  }
}
