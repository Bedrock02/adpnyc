import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid} from 'semantic-ui-react'
import Header from '../Header/';
import Navigation from '../Navigation';
import Footer from '../Footer';
import 'semantic-ui-less/semantic.less';

const Layout = ({ children, data }) => (
  <>
    <Header/>
    <Navigation />
    <Grid relaxed style={{marginTop: '10px'}}>
        <Container style={{paddingTop: '40px', minHeight: '51vh'}}>
          {children}
        </Container>
      <Footer />
    </Grid>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
