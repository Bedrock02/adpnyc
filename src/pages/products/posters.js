import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_posters.jpg';
import Helmet from 'react-helmet';

const keywords = 'posters, adp products, printing,\
 printing products, digital printing products';

class PostersPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Posters"}
          meta={[
            {
              name: 'description',
              content: 'Posters as a product. We print posters and banners for\
               every purpose and on different materials.'
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
              <h2>Posters</h2>
              <p>
                 We print posters and banners for every purpose, on a wide variety of
                 materials—vinyl, canvas, matte and gloss photo papers. Sewn edges,
                 pole pockets, grommets are just a few of your options. Mounting is
                 available on foam core, gator board, illustration board and Plexiglass.
              </p>
              <Image src={productImage} size="big"/>
            </Container>
          </ProductLayout>
        </Layout>
      </>
    );
  }
}
export default PostersPage;
