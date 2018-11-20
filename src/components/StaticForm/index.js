import React from 'react';
import { Icon, Form, Button } from 'semantic-ui-react';

const StaticForm = () => (
  <Form id="contact" className='static-form' action="https://formspree.io/someADP@adp.com" method="POST">
    <Form.Input name="name" label='Your Name' placeholder='Joseph Modesto' width={8} />
    <Form.Input name="_replyto" label='Email' placeholder='joseph.modesto@gmail.com' width={8} />
    <Form.Input name="subject" label='Subject' placeholder='Need Business Cards' width={8} />
    <Form.TextArea name="message"/>
    <Button type='submit' value="send" style={{background: 'rgba(0, 0, 0, 0.87)', color: 'white' }}>
      <Icon name='send' size='large' />
    </Button>
  </Form>
);

export default StaticForm;
