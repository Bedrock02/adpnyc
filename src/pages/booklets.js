import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import ProductLayout from '../components/ProductLayout/';
import productImage from '../../public/static/images/adp_lookbooks.jpg';

class ThermographyPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ProductLayout>
          <Container>
            <h2>Booklets</h2>
            <h3>Booklets :: Brochures :: Look Books</h3>
            <p>
              Options include Prefect Binding, Wire “O”, Saddle-Stitched and Grommets.
              Custom Sizes up to 9″ x 12″
            </p>
            <Image src={productImage} size="large"/>
          </Container>
        </ProductLayout>
      </Layout>
    );
  }
}
export default ThermographyPage;
