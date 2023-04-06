import { GET, RequestHandler } from 'fastify-decorators';

@GET({
  url: '/hello',
})
export default class FirstHandler extends RequestHandler {
  async handle() {
    return 'Hello world!';
  }
}