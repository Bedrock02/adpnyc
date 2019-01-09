import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Responsive } from 'semantic-ui-react'
import SideMenu from '../SideMenu/';


const ProductLayout = ({ children, props }) => (
  <>
    <Responsive minWidth={1020}>
      <Grid {...props}>
        <Grid.Row centered padded="true" columns={2}>
          <Grid.Column width={5} textAlign='left'>
            <SideMenu/>
          </Grid.Column>
          <Grid.Column width={11} stackable="true">
            <Container>
              { children }
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
    <Responsive maxWidth={1020}>
      <Grid {...props}>
        <Container>
          { children }
        </Container>
      </Grid>
    </Responsive>
  </>
);

ProductLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProductLayout;
