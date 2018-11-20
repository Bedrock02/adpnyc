import React from 'react';
import { Grid, Icon, Container, Divider, List } from 'semantic-ui-react';
import { Link } from 'gatsby';

const FooterStyles = {
  marginTop: '50px',
  padding: '30px 0px',
  background: '#000000c9',
  color: '#FFFFFF',
};

class Footer extends React.Component {
  render() {
    return(
      <div style={FooterStyles}>
      <Container>
        <Grid stackable={true} style={{padding: '30px 0px'}}>
          <Grid.Row columns={2}>
            <Grid.Column width={8} textAlign="center">
              <div>
                <Icon name="map marker alternate" />
                <span> 242 West 36th Street, 8th Floor New York, NY 10018 </span>
              </div>
              <Divider />
              <div>
                <Icon name="phone" />
                <span>646-968-8871</span>
              </div>
              <Divider />
              <div>
                <Icon name="mail" />
                <span>some_email_here@adp.com</span>
              </div>
            </Grid.Column>

            <Grid.Column textAlign="center" width={8}>
              <h4>Sitemap</h4>
              <List className="sitemap">
                <List.Item>
                  <Link to="/">
                    Home
                  </Link>
                </List.Item>

                <List.Item>
                  <Link to="products">
                    Product & Services
                  </Link>
                </List.Item>

                <List.Item>
                  <Link to="tools">
                    Tools & Information
                  </Link>
                </List.Item>

                <List.Item>
                  <Link to="contact">
                    Contact
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider/>
      <Grid>
        <Grid.Row columns={3} style={{fontSize: '12px'}}>
          <Grid.Column textAlign="center">
            © 2018 Advanced Digital NYC, Inc.
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Link to="/conditions" style={{color: "#FFFFFF"}}>Conditions of Sale</Link>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Link to="/privacy" style={{color: "#FFFFFF"}}>Privacy Policy</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
export default Footer;
