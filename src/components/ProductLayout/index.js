import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Menu, Responsive } from 'semantic-ui-react'
import SideMenu from '../SideMenu/';


const ProductLayout = ({ children, props }) => (
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
);

ProductLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProductLayout;
