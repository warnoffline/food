import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Meta } from '@/types/shared';
import qs from 'qs';
import { ILocalStore } from '@/utils/useLocalStore';
import rootStore from '../RootStore';
import SearchFoodWineStore from './SearchFoodWineStore/SearchFoodWineStore';
import { Wine } from '@/types/wines';

type metaStateKeys = 'wines';

type PrivateFields = '_wines' | '_queryString' | '_metaState' | '_description';

type UpdateParams = {
  search?: string;
};

class WineStore implements ILocalStore {
  private _wines: Wine[] = [];
  private _description: string = '';
  private _queryString: string = '';
  private _metaState: Record<metaStateKeys, Meta> = {
    wines: Meta.initial,
  };

  readonly searchStore = new SearchFoodWineStore();

  constructor() {
    makeObservable<WineStore, PrivateFields>(this, {
      _wines: observable,
      _description: observable,
      _queryString: observable,
      _metaState: observable,
      wines: computed,
      description: computed,
      metaState: computed,
      queryString: computed,
      getWinePairing: action,
      setDescription: action.bound,
      setMetaState: action,
      setWines: action.bound,
    });
  }

  get wines() {
    return this._wines;
  }

  get description() {
    return this._description;
  }

  get metaState() {
    return this._metaState;
  }

  get queryString() {
    return this._queryString;
  }

  getWinePairing = async () => {
    try {
      const query = this.searchStore.query;
      if (query) {
        this.setMetaState('wines', Meta.loading);

        const data = await rootStore.api.fetchWinePairing(query);

        runInAction(() => {
          if (data) {
            this.setMetaState('wines', Meta.success);
            this.setWines(data.productMatches);
            this.setDescription(data.pairingText);
            return;
          }

          this.setMetaState('wines', Meta.error);
        });
      } else {
        this.setMetaState('wines', Meta.initial);
      }

      const params: UpdateParams = {
        search: query || undefined,
      };

      this.updateUrl(params);
    } catch (error) {
      runInAction(() => {
        this.setMetaState('wines', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setWines(wines: Wine[]) {
    this._wines = wines;
  }

  setDescription(text: string) {
    this._description = text;
  }

  updateUrl(params: UpdateParams) {
    const queryString = `wine-pairing${qs.stringify(params, { addQueryPrefix: true })}`;
    window.history.replaceState(null, '', queryString || window.location.pathname);
    this._queryString = queryString;
  }

  destroy(): void {}
}

export default WineStore;
