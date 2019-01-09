import React from 'react';
import { Container } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import QRCode from 'qrcode.react';

class QRCodes extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Container>
          <h2>What Are QR Codes?</h2>

          <QRCode
            value={"https://adpnyc.com"}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
          />

          <h3>What they are is simple:</h3>
          <p>
          They are 2D barcodes that can be decoded by most smartphones that have a camera.
          </p>

          <h3>What information can a QR Codes hold?</h3>
          <p>
          It can be as simple as a link to a website, or as complex as a MECard/VCard format that can allow the person who scans the code to save your full contact information to their address book with a single click.
          </p>

          <h3>What can you do with them?</h3>
          <p>
          That is virtually limited only by your imagination. They can be printed on you business cards so the person can scan your information into their phone address book. They can be printed on postcards and flyers to offer discounts or links to website.
          </p>

          <h3>Want to know more?</h3>
          <p>
          QR Codes were created in 1994, but only recently have they started to be popular in the United States.
          Looking for more info. about the origin of the “Quick Response” Code.. check out Wikipedia.
          Then give us a call to see how we can help you get started with your projects.
          </p>
        </Container>
      </Layout>
    );
  }
}
export default QRCodes;
