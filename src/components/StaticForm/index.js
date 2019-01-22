import React from 'react';
import { Icon, Form, Button, Grid, Responsive } from 'semantic-ui-react';

const ResponsiveGrid = ({ children, props }) => (
  <>
    <Responsive {...Responsive.onlyMobile}>
      <Grid className="mobile-contact-form">
        <Grid.Row>
          <Grid.Column textAlign="center">
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
    <Responsive minWidth={ Responsive.onlyMobile.maxWidth }>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  </>

);

const StaticForm = () => (
  <ResponsiveGrid>
    <Form id="contact" className='static-form' action="https://formspree.io/info@adpnyc.com" method="POST">
      <Form.Input className="form-input" name="name" label='Your Name' placeholder='Joseph Modesto' width={8} />
      <Form.Input className="form-input" name="_replyto" label='Email' placeholder='joseph.modesto@gmail.com' width={8} />
      <Form.Input className="form-input" name="subject" label='Subject' placeholder='Need Business Cards' width={8} />
      <Form.TextArea className="form-input" name="message"/>
      <Button type='submit' value="send" style={{background: 'rgba(0, 0, 0, 0.87)', color: 'white' }}>
        <Icon name='send' size='large' />
      </Button>
    </Form>
  </ResponsiveGrid>
);

export default StaticForm;
