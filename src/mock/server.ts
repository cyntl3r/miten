import { createServer, Response } from 'miragejs';

const isCorrectLogin = () => Math.random() >= 0.5;

createServer({
  routes() {
    this.namespace = 'api';

    this.post(
      '/auth',
      () => {
        if (!isCorrectLogin()) {
          return new Response(401);
        }
        return new Response(200);
      },
      {
        timing: 1000,
      }
    );
  },
});
