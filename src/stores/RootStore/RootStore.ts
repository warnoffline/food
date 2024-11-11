import QueryParamsStore from './QueryParamsStore';

export default class RootStore {
  readonly query = new QueryParamsStore();

  destroy(): void {}
}
