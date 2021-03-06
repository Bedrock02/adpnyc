import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import bleedImg from '../../../public/static/images/adp_bleeds.jpg';
import Helmet from 'react-helmet';

const keywords = "Bleeds, digital information, ADP, Advanced Digital Printing NYC, NYC printing";

class Bleeds extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Bleeds"}
          meta={[
            {
              name: 'description',
              content: 'Bleeds. What are bleeds? How can you use bleeds in your digital printing?' },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
          <Container>
            <h2>What Are Bleeds?</h2>
            <p>
              Bleeds are when you want a image or graphics to print
              to the edge of the page.
            </p>

            <p>
              You need to make it bigger than the final size, because every
              print does not print in the exact same positions, so when it is
              cut you may get void areas where the paper show unprinted if you
              don’t add bleeds as shown below. See the Image below for more
              details
            </p>
            <Image src={bleedImg} size="big" centered="true"/>
          </Container>
        </Layout>
      </>
    );
  }
}
export default Bleeds;
