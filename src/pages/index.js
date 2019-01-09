import React from 'react';
import { Grid, Responsive, Image, Segment, List, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import Trio from '../components/Trio';
import DigitalImage from '../../public/static/images/digital-image.jpg';
import MapImage from '../../public/static/images/map.png';
import Helmet from 'react-helmet';

const centerContent = (
  <div>
    <Image src={DigitalImage}/>
  </div>
);

const sideContent = (
  <Segment textAlign="center" padded>
    <a href="https://goo.gl/tbkkUH" target="_bank">
      <Image src={MapImage} centered="true"/>
    </a>
    <h4><Icon name="time"/>Hours of Operation</h4>
    <List divided relaxed>
      <List.Item>Mon 8:00 AM - 5:00 PM</List.Item>
      <List.Item>Tue 8:00 AM - 5:00 PM</List.Item>
      <List.Item>Wed 8:00 AM - 5:00 PM</List.Item>
      <List.Item>Thur 8:00 AM - 5:00 PM</List.Item>
      <List.Item>Fri 8:00 AM - 5:00 PM</List.Item>
    </List>
  </Segment>
);

const keywords = "Advanced Digital NYC, digital printing, printing,\
  printing solutions, posters, brochures, ecofriendly";

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Helmet
          title={"Advanced Digital NYC"}
          meta={[
            {
              name: 'description',
              content: 'Advanced Digital NYC is your solution to all your digital printing needs.\
                We offer various services such as printing of posters, brochures, business cards and more.\
                We also offer products made with high quality, and ecofriendly material.',
            },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
          <Responsive {...Responsive.onlyMobile}>
            <Grid>
              <Grid.Row centered padded="true" columns={2}>
                <Grid.Column width={16} stackable="true">
                  {centerContent}
                  {sideContent}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Trio />
          </Responsive>

          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid>
              <Grid.Row centered padded="true" columns={2}>
                <Grid.Column width={5} textAlign='left'>
                  {sideContent}
                </Grid.Column>
                <Grid.Column width={11}>
                  {centerContent}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Trio />
          </Responsive>
        </Layout>
      </>
    );
  }
}

export default IndexPage
