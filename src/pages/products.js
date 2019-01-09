import React from 'react';
import { Grid   } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout/';
import products from '../data/products';
import _ from 'lodash';

const keywords = 'nyc digital printing, products, digital printing, brochures, business cards, counter cards, invitations, postcards, color prints';

class ProductsPage extends React.Component {

  render() {
    const product_chunks = _.chunk(products, 3);
    let rows = [];
    _.forEach(product_chunks, (chunk, index) => {
      rows.push(
        (
          <Grid.Row columns={chunk.length} centered="true">
            {chunk.map( (product, index) => {
              return (
                <Grid.Column verticalAlign={"middle"}>
                  <Link to={`/products/${product.link}`} style={{color: "#000000c9"}}>
                    {product.image}
                    <h2>{product.name}</h2>
                  </Link>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        )
      )
    });
    return (
      <>
        <Helmet
          title={"Products & Services"}
          meta={[
            {
              name: 'description',
              content: 'ADP products that are offered. Digital printing products are made to fit your needs.' },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
          <Grid centered="true" stackable>
            {rows.map( row => row)}
          </Grid>
        </Layout>
      </>
    );
  }
}

export default ProductsPage
