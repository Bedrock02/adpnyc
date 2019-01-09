import React from 'react';
import { Container, Image, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import ccImage from '../../../public/static/images/adp_cc_foamboard.jpg';
import ccImage2 from '../../../public/static/images/adp_cc_ill_board.jpg';
import ccImage3 from '../../../public/static/images/adp_cc_iam_cc.jpg';
import Helmet from 'react-helmet';

const keywords = 'counter cards, adp products, printing,\
 printing products, digital printing products';

class CounterCardsPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Counter Cards"}
          meta={[
            {
              name: 'description',
              content: 'Counter cards as a product. Advanced Digital NYC offers\
               a counter card used to display at conventions or special events.'
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
              <h2>Counter Cards</h2>
              <p>
                Don’t miss that sale! Point-of-purchase (POP) displays have been
                proven to stimulate impulse buying. Whether you need just one
                large counter card mounted on foam core or illustration board for
                a convention or special event to hundreds of laminated counter
                cards for distribution, we can help.
              </p>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={4}>
                    <Image src={ccImage} size="small"/>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <h3>Counter Cards – Mounted on Foam or Gator Board</h3>
                    <p>
                    Digitally Printed Counter Cards.

                    Mounted on Foam Board or Gator Board with an easel back.

                    In addition to the difference in color the gator boards are
                    more densely compressed, so they are a little heavier and more
                     durable even though they are the same thickness.
                    </p>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column width={4}>
                    <Image src={ccImage2} size="small"/>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <h3>Counter Cards – Mounted on Illustration Board</h3>
                    <p>
                      Digitally Printed Counter Cards.

                      Mounted on Illustration Board with an easel back.
                     </p>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column width={4}>
                    <Image src={ccImage3} size="small"/>
                  </Grid.Column>

                  <Grid.Column width={12}>
                    <h3>Counter Cards – Laminated</h3>
                    <p>
                      Digitally Printed Counter Cards.

                      Laminated both sides with an easel back.
                     </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </ProductLayout>
        </Layout>
      </>
    );
  }
}
export default CounterCardsPage;
