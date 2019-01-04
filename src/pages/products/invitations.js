import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_invite.jpg';
import Helmet from 'react-helmet';

const keywords = 'Thermography, adp products, printing,\
 printing products, digital printing products';

class ThermographyPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Thermography"}
          meta={[
            {
              name: 'description',
              content: 'Thermography as a product. Using melted polymer/ink,\
               we produce raised printing.'
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
              <h2>Invitations</h2>
              <h3>Custom Invites</h3>
              <p>
                Whether you need Quick & Colorful Digital Printing or engraving,
                sculpted die embossing, letterpress, thermography or a combination
                of technologies to make your work stand out, we have the dedication
                 and experience required to craft the perfect piece for any occasion.
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
