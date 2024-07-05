import { type APIRoute } from 'astro';
import router from '@/api';

export const prerender = false;

export const ALL: APIRoute = async (context) => {
  try {
    const { request } = context;
    return router.fetch(request);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};
