export class NoSuchParamException extends Error {
  constructor(paramId: number) {
    super(`Param with id ${paramId} doesn't exist`);
    Object.setPrototypeOf(this, NoSuchParamException.prototype);
  }
}
