import fp from 'fastify-plugin'

import { bootstrap } from 'fastify-decorators';

export interface DecoratorsOptions {
}

/**
 * Set of Typescript decorators to build Fastify server 
 * with controllers, services and hooks
 *
 * @see https://github.com/L2jLiga/fastify-decorators
 */
export default fp<DecoratorsOptions>(async (fastify) => {
  fastify.register(bootstrap, {
    // Specify directory with our handler,import.meta.url
    directory: new URL(`../controllers`, import.meta.url),
  
    // Specify mask to match only our handler
    mask: /\.handler\./,
  });
})
