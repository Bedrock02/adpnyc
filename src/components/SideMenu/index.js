import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react';
import { Link } from 'gatsby';

const LinkedItem = ({ children, ...props}) => {
    return (<Menu.Item as={Link} {...props}>{children}</Menu.Item>);
};

class SideMenu extends Component {
  render() {
    return (
      <div>
        <h3>Products & Services</h3>
        <Menu vertical className="sidemenu" style={{background: 'rgba(0, 0, 0, 0.07)'}}>
          <LinkedItem to="/brochures">
            Brochures
          </LinkedItem>
          <LinkedItem to="/business-cards">
            Business Cards
          </LinkedItem>
          <LinkedItem to="/postcards">
            Postcards
          </LinkedItem>
          <LinkedItem to="/posters">
            Posters, Banners, Signage
          </LinkedItem>
          <LinkedItem to="/presentation-folders">
            Presentation Folders
          </LinkedItem>
          <LinkedItem to="/hang-tags">
            Hang Tags
          </LinkedItem>
          <LinkedItem to="/color-prints">
            Color / B&W Prints
          </LinkedItem>
          <LinkedItem to="/order-invoice-forms">
            Order / Invoice Forms
          </LinkedItem>
          <LinkedItem to="/stationery">
            Stationery
          </LinkedItem>
          <LinkedItem to="/thermography">
            Thermography (Raised Print)
          </LinkedItem>
        </Menu>
      </div>
    );
  }
}
export default SideMenu;
