import React from 'react';
import { Container, Grid, Divider, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import StaticForm from '../components/StaticForm/';

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h2>Contact Us</h2>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <h3>Advanced Digital NYC, Inc.</h3>
                <p>242 West 36th Street, 8th Floor</p>
                <p>New York, NY 10018</p>
                <p>Phone: 646-968-8871</p>
              </Grid.Column>
              <Grid.Column>
                <h3>Office Hours</h3>
                <p><Icon name="checked calendar"/>Monday – Friday 8am to 5pm</p>
                <p><Icon name="calendar plus"/>After 5pm By Appointment Only</p>
                <p><Icon name="delete calendar"/>Closed On Weekends</p>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <StaticForm />
        </Container>
      </Layout>
    );
  }
}

export default ContactPage;
