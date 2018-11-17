import React from 'react';
import { Container, Grid, Card, Image } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import products from '../data/products';
import _ from 'lodash';

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
                  {product.image}
                  <h2>{product.name}</h2>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        )
      )
    });
    return (
      <Layout>
        <Grid centered="true" stackable>
          {rows.map( row => row)}
        </Grid>
      </Layout>
    );
  }
}

export default ProductsPage
