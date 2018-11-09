import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import ProductLayout from '../components/ProductLayout/';
import productImage from '../../public/static/images/adp_posters.jpg';

class PostersPage extends React.PureComponent {
  render() {
    return (
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
    );
  }
}
export default PostersPage;
