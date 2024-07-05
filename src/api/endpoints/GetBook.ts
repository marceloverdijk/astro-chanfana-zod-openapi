import { OpenAPIRoute } from 'chanfana';
import { z } from '@/api/utils/zod';
import { BookSchema } from '@/api/schemas';

export class GetBook extends OpenAPIRoute {
  schema = {
    summary: 'Retrieves a book.',
    description: 'Retrieves a book.',
    tags: ['Books'],
    operationId: 'get-book',
    request: {
      params: z.object({
        book_id: z.string().openapi({ description: 'The unique identifier of the book.' }),
      }),
    },
    responses: {
      '200': {
        description: 'Book response.',
        content: {
          'application/json': {
            schema: BookSchema,
          },
        },
      },
    },
  };

  async handle(request: Request) {
    const data = await this.getValidatedData<typeof this.schema>();
    const bookId = data.params.book_id;
    const book = {
      id: bookId,
      isbn: '978-0-7475-3269-9',
      title: "Harry Potter and the Philosopher's Stone",
      type: 'FANTASY',
      author: 'J. K. Rowling',
    };
    return BookSchema.parse(book);
  }
}
