import React from 'react';
import { Link } from 'gatsby';
import { Grid, Container, Menu, Image, Responsive } from 'semantic-ui-react';
import image from '../../../public/static/images/logo.png';

class Header extends React.Component {
  render() {
    return(
      <Grid style={{ padding: '10px 0px' }}>
        <Grid.Row>
          <Grid.Column width={6} verticalAlign="middle">
            <div>
              <Responsive {...Responsive.onlyMobile}>
                <img
                  className='logoImage'
                  src={image}
                  style={{width: '80vw'}}
                />
              </Responsive>
              <Responsive {...Responsive.onlyTablet}>
                <img
                  className='logoImage'
                  src={image}
                  style={{width: '50vw'}}
                />
              </Responsive>

              <Responsive {...Responsive.onlyComputer}>
                <Image src={image} size="huge"/>
              </Responsive>
            </div>
          </Grid.Column>
          <Grid.Column width={10} verticalAlign="middle">
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Header
