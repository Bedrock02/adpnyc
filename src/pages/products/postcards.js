import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_postcards.jpg';
import Helmet from 'react-helmet';

const keywords = 'postcards, adp products, printing,\
 printing products, digital printing products';

class PostcardsPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Postcards"}
          meta={[
            {
              name: 'description',
              content: 'Postcards as a product. We have hte expertise to\
               deliver the jobs you need, on time, on budget, and with the\
                quality you expect.'
            },
            {
              name: 'keywords',
              content: keywords
            },
          ]}
        />
        <Layout>
          <ProductLayout>
            <Container>
              <h2>Postcards</h2>
              <p>
                We print postcards for every purpose, from the fashion business,
                to theater and art. From spot-colors and metallic inks, 4-color
                digital printing with or without a matte or gloss UV coating, we
                have the expertise to deliver the jobs you need, on time, on
                budget, and with the quality you expect.
              </p>
              <Image src={productImage} size="big"/>
            </Container>
          </ProductLayout>
        </Layout>
      </>
    );
  }
}
export default PostcardsPage;
