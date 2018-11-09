import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import ProductLayout from '../components/ProductLayout/';
import productImage from '../../public/static/images/adp_business_cards.jpg';

class BusinessCardsPage extends React.PureComponent {
  render() {
    return (
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
    );
  }
}
export default BusinessCardsPage;
