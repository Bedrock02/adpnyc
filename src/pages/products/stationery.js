import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_stationery.jpg';

class StationeryPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ProductLayout>
          <Container>
            <h2>Stationery</h2>
            <p>
              Your stationery reflects your business; it is the single most
              important representation of who you are. You can depend on
              Advanced Printing to make sure your business always looks its best.
            </p>
            <Image src={productImage} size="large"/>
          </Container>
        </ProductLayout>
      </Layout>
    );
  }
}
export default StationeryPage;
