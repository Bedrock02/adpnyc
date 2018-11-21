import React from 'react';
import { Link } from 'gatsby';
import {
  Menu,
  Responsive,
  Icon,
  Grid,
  Dropdown,
  Container
} from 'semantic-ui-react';

const NavStyles = {
  menu: { color: "#FFFFFF" },
  activeMenu: { color: "#DA097A" },
  mobileMenu: { color: "#FFFFFF", paddingLeft: '30px' },
};

const handleOnClick = (location) => {
  window.open(location, '_blank');
}

const CustomMenu = ({ ...props }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered="true">
          <Menu {...props}>
            <div>
              <Menu.Item style={NavStyles.menu} as={Link} to="/" name="" activeStyle={NavStyles.activeMenu}>
                Home
              </Menu.Item>
            </div>
            <div>
            <Menu.Item style={NavStyles.menu} as={Link} to="/products" name="products" activeStyle={NavStyles.activeMenu}>
              Products & Services
            </Menu.Item>
            </div>
            <div>
            <Menu.Item style={NavStyles.menu} as={Link} name="tools" to="/tools" activeStyle={NavStyles.activeMenu}>
              Tools & Information
            </Menu.Item>
            </div>
            <div>
            <Menu.Item
              style={NavStyles.menu}
              as={Link}
              name="upload_files"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open('https://adpnyc.wetransfer.com/', '_blank');
              }}
            />
            </div>
            <div>
            <Menu.Item style={NavStyles.menu} as={Link} name="contact" to="/contact" activeStyle={NavStyles.activeMenu}/>
            </div>
          </Menu>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { showMobileMenu: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { showMobileMenu } = this.state;
    this.setState({ showMobileMenu: !showMobileMenu });
  }

  render() {
    const { showMobileMenu } = this.state;
    return (
      <Grid>
        <Grid.Row style={{backgroundColor: '#000000c9'}}>
          <Grid.Column>
            <Responsive minWidth={680}>
              <CustomMenu secondary={true} vertical={false}/>
            </Responsive>
            <Responsive maxWidth={680}>
              <Icon name="bars" size="large" style={NavStyles.mobileMenu} onClick={this.handleOnClick}/>
              { showMobileMenu &&
                <CustomMenu secondary={true} vertical={true} style={{width: '100%', textAlign: 'center'}} />
              }
            </Responsive>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Navigation;
