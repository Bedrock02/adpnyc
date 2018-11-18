import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout/';

class ToolsPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h2>Tools</h2>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <h2>Color Chart</h2>
              </Grid.Column>

              <Grid.Column>
                <h2>Bleeds</h2>
              </Grid.Column>

              <Grid.Column>
                <h2>QR Codes</h2>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default ToolsPage;
