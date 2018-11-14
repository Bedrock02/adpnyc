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
            <Grid.Row stackable columns={chunk.length} doubling centered="true">
              {chunk.map( (product, index) => {
                return (
                  <Grid.Column>
                    <Card>
                      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                      <Card.Content>
                        <Card.Header>{product.name}</Card.Header>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          )
        )
    });
    return (
      <Layout>
        <Grid centered="true">
          {rows.map( row => row)}
        </Grid>
      </Layout>
    );
  }
}

export default ProductsPage
