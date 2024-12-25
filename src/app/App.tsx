import { RootStoreProvider } from '@/stores/RootStore/hooks/useRootStore';
import RouterComponent from './router';

function App() {
  return (
    <RootStoreProvider>
      <RouterComponent />
    </RootStoreProvider>
  );
}

export default App;
