import React from 'react';
import { List } from 'semantic-ui-react';
import Layout from '../components/Layout/';

class PrivacyPage extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Privacy Policy</h2>
        <p>
          We take your right to privacy seriously and want you to feel
          comfortable using our web site. This Privacy Policy deals with
          personally identifiable information (referred to as “Data” below)
          that may be collected by us on our site.
        </p>
        <List ordered>

          <List.Item>
            <List.Header>Collection of Data</List.Header>
            <p>Our registration process requires only a valid e-mail address
             and a unique user ID and password. Our ordering process requires
             valid delivery address information. Our payment process requires
             valid billing address information, Tax ID information and credit
             card information.
             </p>
          </List.Item>

          <List.Item>
            <List.Header>Use of Data</List.Header>
            <p>
              We may use Data to customize and improve your user experience on
              this site. Your Data will not be provided to third parties
              unless:
            </p>
            <List.List>
              <List.Item>
                We obtain your consent, such as when you choose to
                opt-in or opt-out to the sharing of Data;
              </List.Item>
              <List.Item>
                A service provided on our site requires the interaction
                with or is provided by a third party such as, for example,
                credit card authorization services;
              </List.Item>
              <List.Item>
                Pursuant to legal process or law enforcement;
              </List.Item>
              <List.Item>
                We find that your use of this site violates our this Policy,
                Terms of Service, other usage guidelines or as deemed
                reasonably necessary by us to protect our legal rights and/or
                property.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item>
            <List.Header>Cookies</List.Header>
            <p>
              Like many web sites, we may set and use cookies to enhance your
              user experience, such as retaining your personal settings.
            </p>
            <List.List>
              <List.Item>
                <List.Header>Editing or Deleting Your Account Information.</List.Header>
                <p>
                  We provide you with the ability to edit the information in
                  your user account information that you provided to us in
                  registration by using your account configuration pages. You
                  may request deletion of your user account by contact us.
                </p>
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item>
            <List.Header>Changes to this Privacy Policy.</List.Header>
            <p>
              We may make changes to this Policy from time to time. We will
              notify you of substantial changes to this Policy either by posting
              a prominent announcement on our site and/or by sending a message to
              the e-mail address you have provided to us that is contained within
              your user settings.
            </p>
          </List.Item>

          <List.Item>
            <List.Header>Contact Information.</List.Header>
            <p>
              If you have any questions about this Policy or our web site,
              please feel free to contact us.
            </p>
          </List.Item>
        </List>
      </Layout>
    );
  }
}

export default PrivacyPage;
