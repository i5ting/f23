import { GET, RequestHandler } from 'fastify-decorators';

@GET({
  url: '/',
})
export default class FirstHandler extends RequestHandler {
  async handle() {
    return 'Hello root!';
  }
}