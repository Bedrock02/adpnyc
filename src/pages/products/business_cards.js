import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_business_cards.jpg';
import Helmet from 'react-helmet';

const keywords = 'business cards, adp products, printing,\
 printing products, digital printing products';

class BusinessCardsPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Business Cards"}
          meta={[
            {
              name: 'description',
              content: 'Business cards as a product. Advanced Digital NYC offers\
               an affordable way to market yourself with different design options.'
            },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
          <ProductLayout>
            <Container>
              <h2>Business Cards</h2>
              <p>
                There are so many types of business cards from the quick digital
                that can be ready in one day when you supply the artwork as a PDF
                to the traditional Spot Color printing where you corporate color
                are mixed to the PMS (Pantone Matching System) standard. We can
                also do speciality cards that include Thermography, Engraving,
                Embossing, Foil Stamping and Die Cut corners and shapes.
              </p>
              <Image src={productImage} size="large"/>
            </Container>
          </ProductLayout>
        </Layout>
      </>
    );
  }
}
export default BusinessCardsPage;
