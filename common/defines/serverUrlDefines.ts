export default class ServerUrlDefines {


  static get apiServer(): string {
    return process.env.apiUrl ?? 'http://localhost:3000';
  }

  static get wwwServer(): string {
    return process.env.wwwUrl ?? 'http://localhost:3000';
  }
}
