import QueryParamsStore from './QueryParamsStore';
import ApiStore from './ApiStore';
import UserStore from './UserStore/UserStore';

export default class RootStore {
  readonly query = new QueryParamsStore();
  readonly api = new ApiStore();
  readonly user = new UserStore();

  destroy(): void {}
}
