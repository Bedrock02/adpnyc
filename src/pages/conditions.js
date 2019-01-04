import React from 'react';
import { Container, Grid, Icon, Button, List } from 'semantic-ui-react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/';
import Helmet from 'react-helmet';

const keywords = "Conditions, privacy, company, trust, ADP, Advanced Digital Printing NYC, NYC printing";

class ConditionsPage extends React.Component {
  render() {
    const styles = {
      linkStyles: { color: '#000000c9'},
      buttonDiv: { marginTop: '30px' },
    }
    return (
      <>
        <Helmet
          title={"Terms & Conditions"}
          meta={[
            {
              name: 'description',
              content: 'ADP Conditions of Sale. Agreement and contract of business' },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
          <h2>Conditions of Sale</h2>
          <List ordered>
            <List.Item>
              Unless otherwise expressly agreed in writing, all goods are sold
              upon the following terms and conditions to the exclusion of any
              terms and conditions of the Purchaser and no agent or
              representative of Advanced Digital NYC, Inc. (the Company) has any
              authority to vary or omit, part of or all of, these conditions.
              Acceptance of delivery of the goods shall constitute acceptance of
              these terms.
            </List.Item>
            <List.Item>
              Any deficiency in quantity of product delivered or transportation
              damage as at the time of delivery shall be notified to the Company
              immediately upon receipt. Acknowledgement of the delivery shall be
              deemed to be acceptance of the quantities as set out by the invoice
              and that the product has not suffered from transportation damage.
            </List.Item>
            <List.Item>
              The Company will make good at its option by repair or replacement
              any articles sold by it which, within 30 days after delivery, are
              shown to the Company’s satisfaction to have been, at the time of
              delivery, defective where such defect is solely attributable to
              defective workmanship, materials or manufacture provided that: (i)
              the Company is immediately notified upon detection; and (ii) no
              defect is caused by willful damage, negligence, incorrect storage
              or application, incorrect use, movement, installation or assembly
              (except by the Company, its servants or its agents) or defects
              caused by fair wear and tear; and (iii) if required by the Company
              the goods are returned to the Company within 30 days of the
              discovery of the defect.The warranty contained in this
              Condition is the ONLY express warranty given by the Company.
              All other conditions, representations, terms and warranties as to
              the fitness or quality of the goods supplied for any purpose,
              whether express or implied, whether statutory or otherwise and
              whether verbal or in writing are hereby excluded and negatived to
              the full extent permitted by law in each case.
            </List.Item>
            <List.Item>
              Subject only to the provisions of Condition 3 the Company hereby
              excludes to the full extent allowed by law all liability of any
              kind whatsoever to the purchaser or any other party for any loss,
              damage or loss sustained or incurred by the purchaser or any other
              party in consequence of or resulting by, directly or indirectly,
              the supply of, use of, or performance of any products or services
              for whatever reason whether arising out of any breach by the
              company of any contract incorporating these Conditions or negligent
               or wrongful acts by the Company or its servants or its agents in
               connection with its products and or its services, and limits any
               liability that it might nevertheless have to a maximum amount
               being the invoiced price of the products or services in question.
            </List.Item>
            <List.Item>
              No goods may be returned to the Company without the Company’s
              prior written consent.
            </List.Item>
            <List.Item>
              The Company reserves the right to declare void any warranty claim
              where the claimant does not extend to the Company a reasonable
              opportunity to fully inspect the product, application and
              circumstances of the product.
            </List.Item>
            <List.Item>
              The Company will use its best endeavors to deliver at the time
               stated and all delivery dates shall be regarded at best as
               estimates only. The purchaser must accept the actual delivery date
                and the Company shall not be liable for any losses, costs,
                damages or expenses suffered by the purchaser or any other party
                as a result of any delivery in delivery.
            </List.Item>
            <List.Item>
              Unless otherwise agreed between Purchaser and Company, payment in
              full is due within the terms stated on the invoice. Failure to make
               due payments in respect of deliveries or installments under this
               or any other contract with the Company shall entitle the Company
               to delay, suspend or cancel deliveries in whole or in part at its
               option.
            </List.Item>
            <List.Item>
              For so long as any amounts remain owing to the Company, title to
              and property in the goods shall remain in the Company and shall not
              pass to the purchaser. All goods which remain the property of the
              Company will be held by the purchaser on behalf of the Company in
              a fiduciary capacity and shall be stored separately from all
              other goods. At any time after the due date for payment of
              any account owing from the purchaser to the Company and so long
              as such amounts have not been received by the Company in full,
              the Company at the purchaser’s expense shall be entitled to
              require the purchaser to return to the Company and shall have
              the right to enter the buyer’s premises or where the goods are
              stored and remove there from all goods which remain the property
              of the Company.
            </List.Item>
            <List.Item>
              The Company will not be liable for breach of contract arising from
               or caused by, directly or indirectly, force majeure, war, strikes,
                riots and civil commotions and nature disasters.
            </List.Item>
            <List.Item>
              Any order that has been accepted by the Company may not be reduced
              or cancelled after acceptance without the agreement of the Company
              in writing.
            </List.Item>
          </List>
        </Layout>
      </>
    );
  }
}

export default ConditionsPage;
