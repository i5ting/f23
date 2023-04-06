import fp from 'fastify-plugin'

import { bootstrap } from 'fastify-decorators';
// import {join} from 'node:path'

export interface DecoratorsOptions {
}

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<DecoratorsOptions>(async (fastify) => {
  // fastify.register(sensible)
  console.dir(import.meta.url)
  fastify.register(bootstrap, {
    
    // Specify directory with our handler,import.meta.url
    directory: new URL(`../handlers`, import.meta.url),
  
    // Specify mask to match only our handler
    mask: /\.handler\./,
  });
})
