import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';

import cars from '../cars.json';
import { CarList } from './Cards/CarList';

export const App = () => {
  return (
    <Layout>
      <CarList cars={cars} />
      <GlobalStyle />
    </Layout>
  );
};
