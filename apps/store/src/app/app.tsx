// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Banner } from '@myorg/common-ui';
import {exampleProducts} from '@myorg/products';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Banner text="Welcome to the store!"/>
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
