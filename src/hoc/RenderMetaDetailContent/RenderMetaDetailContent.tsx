import { Meta } from '@/types/shared';
import Text from '@/components/Text';
import Loading from '@/components/Loading';
import s from './RenderMetaDetailContent.module.scss';

type renderMetaContentProps = {
  meta: Meta;
  children: React.ReactNode;
};

const RenderMetaDetailContent: React.FC<renderMetaContentProps> = ({ meta, children }) => {
  switch (meta) {
    case Meta.loading:
      return <Loading page />;
    case Meta.error:
      return (
        <div className={s['root__no-items']}>
          <Text view="title">Oops, something went wrong!</Text>
        </div>
      );
    case Meta.success:
      return children;
    default:
      return <Loading page />;
  }
};

export default RenderMetaDetailContent;
