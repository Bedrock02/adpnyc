import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_lookbooks.jpg';
import Helmet from 'react-helmet';

const keywords = 'booklets, brochures, look books, adp products, printing,\
 printing products, digital printing products';

class ThermographyPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Booklets"}
          meta={[
            {
              name: 'description',
              content: 'Booklets as a product. Advanced Digital NYC offers\
               options such as perfect binding, wire "o", and saddle-stitched\
                and grommets.',
            },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
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
      </>
    );
  }
}
export default ThermographyPage;
