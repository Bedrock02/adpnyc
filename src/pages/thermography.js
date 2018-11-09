import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import ProductLayout from '../components/ProductLayout/';
import productImage from '../../public/static/images/adp_thermo.png';

class ThermographyPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ProductLayout>
          <Container>
            <h2>Thermography (Raised Print)</h2>
            <p>
              Thermography also produces a raised printing surface. Wet inked
              sheets are coated with a powdered polymer, then sent by conveyor
              belt through an oven for a few seconds, melting the polymer/ink
              combination to produce raised printing. Because of the uneven
              surface, thermography can be combined with design to produce
              some very attractive results at much lower cost than engraving.
            </p>
            <Image src={productImage} size="big"/>
          </Container>
        </ProductLayout>
      </Layout>
    );
  }
}
export default ThermographyPage;
