import fp from 'fastify-plugin'

import { bootstrap } from 'fastify-decorators';

export interface DecoratorsOptions {
}

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<DecoratorsOptions>(async (fastify) => {
  fastify.register(bootstrap, {
    // Specify directory with our handler,import.meta.url
    directory: new URL(`../controllers`, import.meta.url),
  
    // Specify mask to match only our handler
    mask: /\.handler\./,
  });
})
