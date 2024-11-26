import Text from '@/components/Text';
import s from './WinePairing.module.scss';
import { withProvider } from '@/hoc/withProvider';
import { useWineStore, WineStoreProvider } from './useWineStore';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';
import RenderMetaContent from '@/hoc/RenderMetaContent';
import SearchWinePairing from './component/SearchWinePairing';
import WineCard from './component/WineCard';
import { observer } from 'mobx-react-lite';

const WinePairing: React.FC = observer(() => {
  const { wines, queryString, getWinePairing, description, metaState, searchStore } = useWineStore();
  const search = searchStore.query;

  useEffect(() => {
    getWinePairing();
  }, [search, queryString, getWinePairing]);

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Wine Pairing</Text>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <SearchWinePairing />
        </motion.div>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <Text view="p-m">{description}</Text>
        </motion.div>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <RenderMetaContent meta={metaState.wines} items={wines}>
            {wines &&
              wines.map((wine, index) => (
                <motion.div key={wine.id} {...animation} transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}>
                  <WineCard wine={wine} />
                </motion.div>
              ))}
          </RenderMetaContent>
        </motion.div>
      </div>
    </motion.div>
  );
});

const WinePairingWithProvider = withProvider(WineStoreProvider, WinePairing);

export default WinePairingWithProvider;
