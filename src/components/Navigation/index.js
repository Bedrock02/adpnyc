import React from 'react';
import { Link } from 'gatsby';
import {
  Menu,
  Responsive,
  Icon,
  Grid,
  Dropdown
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
    <Menu {...props}>
      <Menu.Item style={NavStyles.menu} as={Link} to="/" name="" activeStyle={NavStyles.activeMenu}>
        Home
      </Menu.Item>
      <Menu.Item style={NavStyles.menu} as={Link} to="/products" name="products" activeStyle={NavStyles.activeMenu}>
        Products & Services
      </Menu.Item>
      <Menu.Item style={NavStyles.menu} as={Link} name="tools" to="/tools" activeStyle={NavStyles.activeMenu}>
        Tools & Information
      </Menu.Item>
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
      <Menu.Item style={NavStyles.menu} as={Link} name="contact" to="/contact" activeStyle={NavStyles.activeMenu}/>
    </Menu>
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
      <>
        <Responsive minWidth={680}>
          <CustomMenu secondary={true} vertical={false} style={{backgroundColor: '#000000c9'}}/>
        </Responsive>

        <Responsive maxWidth={680}>
          <Grid>
            <Grid.Row className="nav-container" padded="true" column={1}>
              <Grid.Column>
                <Icon name="bars" size="large" style={NavStyles.mobileMenu} onClick={this.handleOnClick}/>
                { showMobileMenu &&
                  <CustomMenu secondary={true} vertical={true} style={{width: '100%', textAlign: 'center'}} />
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </>
    );
  }
}

export default Navigation;
