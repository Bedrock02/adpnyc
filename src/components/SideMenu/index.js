import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react';
import { Link } from 'gatsby';

const LinkedItem = ({ children, ...props}) => {
    return (
      <Menu.Item
        as={Link}
        {...props}
        activeStyle={{ color: "#DA097A"}}
        >
        {children}
      </Menu.Item>
    );
};

const sideMenuStyles = {
  container: { height: '500px' },
}

class SideMenu extends Component {
  render() {
    return (
      <div>
        <Menu vertical className="sidemenu" style={{background: 'rgba(0, 0, 0, 0.07)'}}>
          <LinkedItem to="/brochures">
            Brochures
          </LinkedItem>
          <LinkedItem to="/business_cards">
            Business Cards
          </LinkedItem>
          <LinkedItem to="/postcards">
            Postcards
          </LinkedItem>
          <LinkedItem to="/posters">
            Posters, Banners, Signage
          </LinkedItem>
          <LinkedItem to="/presentation_folders">
            Presentation Folders
          </LinkedItem>
          <LinkedItem to="/hangtags">
            Hang Tags
          </LinkedItem>
          <LinkedItem to="/color_prints">
            Color / B&W Prints
          </LinkedItem>
          <LinkedItem to="/order_invoices">
            Order / Invoice Forms
          </LinkedItem>
          <LinkedItem to="/stationery">
            Stationery
          </LinkedItem>
          <LinkedItem to="/thermography">
            Thermography (Raised Print)
          </LinkedItem>
          <LinkedItem to="/counter_cards">
            Counter Card
          </LinkedItem>
          <LinkedItem to="/booklets">
            Booklets
          </LinkedItem>
          <LinkedItem to="/invitations">
            Invitations
          </LinkedItem>
        </Menu>
      </div>
    );
  }
}
export default SideMenu;
