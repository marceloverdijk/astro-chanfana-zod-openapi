import { fromIttyRouter } from 'chanfana';
import { Router } from 'itty-router';
import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { GetBook, GetBooks } from '@/api/endpoints';

extendZodWithOpenApi(z);

const router = Router();

const openapi = fromIttyRouter(router, {
  docs_url: '/api/docs',
  redoc_url: '/api/redocs',
  openapi_url: '/api/openapi.json',
});

openapi.get('/api/books', GetBooks);
openapi.get('/api/books/:book_id', GetBook);

export default router;
