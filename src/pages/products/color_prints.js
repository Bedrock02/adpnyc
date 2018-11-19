import React from 'react';
import { Container, Image, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import colorImage from '../../../public/static/images/adp_ls_color.jpg';
import colorImage2 from '../../../public/static/images/adp_ls_bw.jpg';

class HangTagsPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ProductLayout>
          <Container>
            <h2>Color / B&W Prints</h2>
            <h3>Line Sheets :: Sell Sheets :: Laser Prints :: Flyers</h3>
            <p>
              What ever you call it… if you are looking for a basic, but good
              quality paper this is a great option.
              If you want more paper options check out the brochures or booklets sections.

              Remember, we take pride in delivering quality work to you on time, and on budget.
            </p>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={4}>
                  <Image src={colorImage} size="small"/>
                </Grid.Column>
                <Grid.Column width={12}>
                  <h3>Color Line Sheets</h3>
                  <p>
                    Available Sizes: 8.5 x 11, 8.5 x 14, 11 x 17 (Vertical or Horizontal)
                    Options include: Collating, Stapling, Wire Binding
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column width={4}>
                  <Image src={colorImage2} size="small"/>
                </Grid.Column>
                <Grid.Column width={12}>
                  <h3>B&W Line Sheets</h3>
                  <p>
                    Available Sizes: 8.5 x 11, 8.5 x 14, 11 x 17 (Vertical or Horizontal)
                    Options include: Collating, Stapling, Wire Binding
                   </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </ProductLayout>
      </Layout>
    );
  }
}
export default HangTagsPage;
