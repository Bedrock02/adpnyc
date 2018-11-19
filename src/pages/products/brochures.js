import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_brochures.jpg';

class BrochuresPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ProductLayout>
          <Container>
            <h2>Brochures</h2>
            <p>
              Printing Brochures is a great way to promote your business.
              They are affordable and get your message to your potential customers
              quickly. Brochures come in many different sizes from a simple 8.5" x 11"
              to a 25.5" x 11" tri-fold.
            </p>
            <Image src={productImage} size="big"/>
          </Container>
        </ProductLayout>
      </Layout>
    );
  }
}
export default BrochuresPage;
