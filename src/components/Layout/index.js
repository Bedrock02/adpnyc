import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu, Responsive } from 'semantic-ui-react'
import Header from '../Header/';
import Navigation from '../Navigation';
import Footer from '../Footer';
import 'semantic-ui-less/semantic.less';
import { Link } from 'gatsby';

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Header siteTitle={data.site.siteMetadata.title} />
        <Grid relaxed style={{marginTop: '10px'}}>
          <Navigation />
            <Container style={{paddingTop: '40px', minHeight: '51vh'}}>
              {children}
            </Container>
        </Grid>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
