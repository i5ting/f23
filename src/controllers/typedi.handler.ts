import { Controller, GET } from 'fastify-decorators';
import { InjectableService } from '../services/injectable.service.js';
import { Inject } from 'typedi';

@Controller('/typedi')
export default class TypeDIController {
  @Inject()
  private _injectableService!: InjectableService;

  @GET('/a')
  async getSync(): Promise<string> {
    console.dir("get di")
    console.dir(this)
    console.dir(this._injectableService.getMessage())
    return this._injectableService.getMessage();
  }
}
