export type CollectionModel<K extends string | number, T> = Record<K, T>;

export const getInitialCollectionModel = <K extends string | number, T>(): CollectionModel<K, T> =>
  ({}) as Record<K, T>;

export const normalizeCollection = <K extends string | number, T>(
  elements: T[],
  getKeyForElement: (element: T) => K,
): CollectionModel<K, T> => {
  const collection: CollectionModel<K, T> = getInitialCollectionModel();
  elements.forEach((el) => {
    const id = getKeyForElement(el);
    collection[id] = el;
  });

  return collection;
};

export const getKeys = <K extends string | number, T>(collection: CollectionModel<K, T>): K[] => {
  return Object.keys(collection) as K[];
};
