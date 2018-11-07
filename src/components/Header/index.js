import React from 'react';
import { Link } from 'gatsby';
import { Grid, Container, Menu, Image } from 'semantic-ui-react';
import image from '../../../public/static/images/logo.png';

class Header extends React.Component {
  render() {
    return(
      <Grid style={{ padding: '10px 0px' }}>
        <Grid.Row>
          <Grid.Column width={6} verticalAlign="middle">
            <div><Image src={image} size='large' /></div>
          </Grid.Column>
          <Grid.Column width={10} verticalAlign="middle">
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Header
