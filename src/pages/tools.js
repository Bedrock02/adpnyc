import React from 'react';
import { Container, Grid, Icon, Button } from 'semantic-ui-react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/';
import Helmet from 'react-helmet';

const keywords = "pantone, pantone finder, pantone to hex, pantone converter, bleeds, qr codes, printing, printing bleeds";

class ToolsPage extends React.Component {
  render() {
    const styles = {
      linkStyles: { color: '#000000c9'},
      buttonDiv: { marginTop: '30px' },
    }
    return (
      <>
        <Helmet
          title={"ADP Tools"}
          meta={[
            {
              name: 'description',
              content: 'ADP tools to help you enhance your product and the services we offer.\
                Check out our Pantone Finder, learn what bleeds are and what QR Codes are.'
            },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
            <Grid stackable centered={"true"}>
              <Grid.Row>
              </Grid.Row>
              <Grid.Row divided columns={3} className="tools">
                <Grid.Column textAlign="center">
                  <Link to="/tools/pantonefinder" style={ styles.linkStyles }>
                    <div>
                      <h2>Pantone Finder</h2>
                      <Icon name="tint" size="big" />
                    </div>
                    <div style={styles.buttonDiv}>
                      <Button>Find Your Color</Button>
                    </div>
                  </Link>
                </Grid.Column>

                <Grid.Column textAlign="center">
                  <Link to="/tools/bleeds" style={ styles.linkStyles }>
                    <div>
                      <h2>Bleeds</h2>
                      <Icon name="images outline" size="big" />
                    </div>
                    <div style={styles.buttonDiv}>
                      <Button>What are Bleeds?</Button>
                    </div>
                  </Link>
                </Grid.Column>

                <Grid.Column textAlign="center">
                  <Link to="/tools/qrcodes" style={ styles.linkStyles }>
                    <div>
                      <h2>QR Codes</h2>
                      <Icon name="qrcode" size="big" />
                    </div>
                    <div style={styles.buttonDiv}>
                      <Button>Embeded QR Codes</Button>
                    </div>
                  </Link>
                </Grid.Column>

              </Grid.Row>
            </Grid>
        </Layout>
      </>
    );
  }
}

export default ToolsPage;
