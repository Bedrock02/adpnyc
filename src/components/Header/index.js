import React from 'react';
import { Grid, Image, Responsive } from 'semantic-ui-react';
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
                  alt="ADP Logo"
                  style={{width: '80vw'}}
                />
              </Responsive>
              <Responsive {...Responsive.onlyTablet}>
                <img
                  className='logoImage'
                  src={image}
                  alt="ADP Logo tablet"
                  style={{width: '50vw'}}
                />
              </Responsive>

              <Responsive {...Responsive.onlyComputer}>
                <Image src={image} alt="ADP Logo Desktop" size="huge"/>
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
