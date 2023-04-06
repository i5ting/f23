import { Service } from 'typedi';

@Service()
export class InjectableService {
  private _message = 'Message';

  getMessage(): string {
    console.dir("sdfsfsdfs")
    return this._message;
  }
}
