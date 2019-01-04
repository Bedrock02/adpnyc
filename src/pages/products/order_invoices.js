import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import ProductLayout from '../../components/ProductLayout/';
import productImage from '../../../public/static/images/adp_order_invoice.jpg';
import Helmet from 'react-helmet';

const keywords = 'order, invoices, adp products, printing,\
 printing products, digital printing products';

class OrderInvoicesPage extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          title={"ADP: Order Invoices"}
          meta={[
            {
              name: 'description',
              content: 'Order invoices as a product. Print out your order forms\
               with your logo and design.'
            },
            {
              name: 'keywords',
              content: keywords
            },
          ]}
        />
        <Layout>
          <ProductLayout>
            <Container>
              <h2>Order / Invoice Forms</h2>
              <p>
                Carbonless Order Forms, 2 Part & 3 Part sets in stock to print
                your custom order/invoice forms. More then 3 part forms available
                as special order. Standard sizes: 5.5 x 8.5, 8.5 x 11 & 11 x 17
                (custom sizes also available)
              </p>
              <Image src={productImage} size="medium"/>
            </Container>
          </ProductLayout>
        </Layout>
      </>
    );
  }
}
export default OrderInvoicesPage;
