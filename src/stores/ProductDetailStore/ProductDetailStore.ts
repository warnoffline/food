import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Meta } from '@/types/shared';
import { ILocalStore } from '@/utils/useLocalStore';
import rootStore from '../RootStore';
import { Product } from '@/types/product';

type metaStateKeys = 'product';

type PrivateFields = '_product' | '_metaState';

class ProductDetailStore implements ILocalStore {
  private _product: Product | null = null;
  private _metaState: Record<metaStateKeys, Meta> = {
    product: Meta.initial,
  };

  constructor() {
    makeObservable<ProductDetailStore, PrivateFields>(this, {
      _product: observable,
      _metaState: observable,
      product: computed,
      metaState: computed,
      getProduct: action,
      setProduct: action,
      setMetaState: action,
      destroy: action,
    });
  }

  get product() {
    return this._product;
  }

  get metaState() {
    return this._metaState;
  }

  getProduct = async (productId: number) => {
    try {
      this.setMetaState('product', Meta.loading);
      const data = await rootStore.api.fetchProductById(productId);
      runInAction(() => {
        if (data) {
          this.setMetaState('product', Meta.success);
          this.setProduct(data);
          return;
        }

        this.setMetaState('product', Meta.error);
      });
    } catch (error) {
      runInAction(() => {
        this.setMetaState('product', Meta.error);
      });
      console.error('Failed to load:', error);
    }
  };

  setMetaState(key: keyof typeof this._metaState, state: Meta) {
    this._metaState[key] = state;
  }

  setProduct(data: Product) {
    this._product = data;
  }

  destroy(): void {}
}

export default ProductDetailStore;
