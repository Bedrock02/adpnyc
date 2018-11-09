import React from 'react';
import { Container, Image, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import ProductLayout from '../components/ProductLayout/';
import hangTagImage from '../../public/static/images/adp_digital_ht.jpg';
import hangTagImage2 from '../../public/static/images/adp_offset_ht.jpg';

class HangTagsPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ProductLayout>
          <Container>
            <h2>Hang Tags</h2>
            <p>
            From a Quick and simple Digitally printed Hang Tag to the impressive
             double thick offset printed Hang Tags, we have options that will
             you get your product ready to go.
            </p>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={4}>
                  <Image src={hangTagImage} size="small"/>
                </Grid.Column>
                <Grid.Column width={12}>
                  <h3>Digitally Printed Hang Tags</h3>
                  <p>
                  Digital Printing is a quick economical way to print hang tags.
                  With glossy card stock for the full color cards and a nice matte
                   stock for cards with mostly just text and logos we recommend
                   the Strathmore Writing.
                  </p>
                  <p>
                  Options include: UV Coating, Round Corners, Hole Punch, Strings
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column width={4}>
                  <Image src={hangTagImage2} size="small"/>
                </Grid.Column>
                <Grid.Column width={12}>
                  <h3>Offset Printed Hang Tags</h3>
                  <p>
                    Traditional Offset Printing, if you are looking for that
                    classic matte look this is the way to go…   Order up to 2
                    colors per side online or send us your artwork for a custom
                    quote if you need more colors.  Spot Color printing where you
                    corporate color are mixed to the PMS (Pantone Matching System)
                     standard.  We use Soy Based Ink.
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
