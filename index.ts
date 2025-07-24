import index from './index.html'

Bun.serve({
  development: true,
  port: 3000,
  routes: {
    '/': index,
    '/api': new Response('api'),
    '/test': new Response('test', { status: 500 })
  }
})
