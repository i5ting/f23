import { FastifyPluginAsync } from 'fastify';
import { join } from 'desm'
import { Container } from 'typedi';
import AutoLoad, {AutoloadPluginOptions} from '@fastify/autoload';
import { useContainer } from '@fastify-decorators/typedi';

export type AppOptions = {
  // Place your custom options for app below here.
  pluginTimeout: number
} & Partial<AutoloadPluginOptions>;


// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
  pluginTimeout: 90000
}


const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {

  useContainer(Container);

  console.dir(join(import.meta.url, './plugins'),)
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'plugins'),
    options: opts
  })
};

export default app;
export { app, options }
