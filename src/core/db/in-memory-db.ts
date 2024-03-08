export class InMemoryDb<T> {
  private _data: T[] = [];
  constructor(
    private readonly identifiedFn: (item: T) => string,
    initial: T[] = []
  ) {
    this._data.push(...initial);
  }

  async add(item: T): Promise<T> {
    this._data.push(item);
    return item;
  }

  async get(): Promise<T[]> {
    return this._data;
  }

  async getById(id: string): Promise<T> {
    const item = this._data.find((item) => this.identifiedFn(item) === id);

    if (!item) {
      throw new Error(`Data with id ${id} not found`);
    }

    return item;
  }
}
