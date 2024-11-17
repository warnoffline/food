import QueryParamsStore from './QueryParamsStore';
import ApiStore from './ApiStore';

export default class RootStore {
  readonly query = new QueryParamsStore();
  readonly api = new ApiStore();

  destroy(): void {}
}
