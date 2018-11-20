import React from 'react';
import { Grid, Responsive, Image, Message, Segment, List, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/';
import SideMenu from '../components/SideMenu/';
import Trio from '../components/Trio';
import DigitalImage from '../../public/static/images/digital-image.jpg';
import MapImage from '../../public/static/images/map.png';

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

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Responsive minWidth={1020}>
          <Grid>
            <Grid.Row centered padded="true" columns={2}>
              <Grid.Column width={5} textAlign='left'>
                {sideContent}
              </Grid.Column>
              <Grid.Column width={11} stackable="true">
                {centerContent}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>

        <Responsive maxWidth={1020}>
          <Grid>
            <Grid.Row centered padded="true" columns={2}>
              <Grid.Column width={16} stackable="true">
                {centerContent}
                {sideContent}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Trio />
      </Layout>
    );
  }
}

export default IndexPage
