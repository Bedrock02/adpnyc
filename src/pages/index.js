import React from 'react';
import { Grid, Responsive, Image, Message, Segment } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import SideMenu from '../components/SideMenu/';
import Trio from '../components/Trio';
import DigitalImage from '../../public/static/images/digital-image.jpg';

class IndexPage extends React.Component {


  render() {

    const centerContent = (
      <div>
        <Image src={DigitalImage}/>
      </div>
    );

    return (
      <Layout>
        <Responsive minWidth={1020}>
          <Grid>
            <Grid.Row centered padded="true" columns={2}>
              <Grid.Column width={5} textAlign='left'>
                <SideMenu/>
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
