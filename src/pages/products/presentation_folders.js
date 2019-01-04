import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_presentation_folders.jpg';
import Helmet from 'react-helmet';

const keywords = 'presentation folder, adp products, printing,\
 printing products, digital printing products';

class PresentationFoldersPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Presentation Folders"}
          meta={[
            {
              name: 'description',
              content: 'Presentation folders as a product. We print\
               presentation folders in little under one business day.'
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
              <h2>Presentation Folders</h2>
              <p>
                Get your presentations folders printed here. Need a few in a Rush,
                we can digitally print as little as 15 folders with add on pockets
                in as little as one business day when you supply art work. We can
                also do high quality offset printing on a variety of stocks with
                ink, foil and embossing.
              </p>
              <Image src={productImage} size="large"/>
            </Container>
          </ProductLayout>
        </Layout>
      </>
    );
  }
}
export default PresentationFoldersPage;
