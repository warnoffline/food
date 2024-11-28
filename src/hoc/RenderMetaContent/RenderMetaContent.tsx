import { Meta } from '@/types/shared';
import Text from '@/components/Text';
import Loading from '@/components/Loading';
import s from './RenderMetaContent.module.scss';

type renderMetaContentProps<T> = {
  meta: Meta;
  items: T[];
  children: React.ReactNode;
};

const RenderMetaContent = <T,>({ meta, items, children }: renderMetaContentProps<T>) => {
  switch (meta) {
    case Meta.loading:
      return <Loading />;
    case Meta.error:
      return (
        <div className={s['root__no-items']}>
          <Text view="title">Oops, something went wrong!</Text>
        </div>
      );
    case Meta.success:
      return items && items.length > 0 ? (
        <div className={s.root__center}>
          <div className={s.root__items}>{children}</div>
        </div>
      ) : (
        <div className={s['root__no-items']}>
          <Text view="title">No results</Text>
        </div>
      );
    default:
      return (
        <div className={s['root__no-items']}>
          <Text view="title">No results</Text>
        </div>
      );
  }
};

export default RenderMetaContent;
