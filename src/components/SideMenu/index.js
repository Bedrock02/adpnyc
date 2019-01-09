import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
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


class SideMenu extends Component {
  render() {
    return (
      <div>
        <Menu vertical className="sidemenu" style={{background: 'rgba(0, 0, 0, 0.07)'}}>
          <LinkedItem to="/products/brochures">
            Brochures
          </LinkedItem>
          <LinkedItem to="/products/business_cards">
            Business Cards
          </LinkedItem>
          <LinkedItem to="/products/postcards">
            Postcards
          </LinkedItem>
          <LinkedItem to="/products/posters">
            Posters, Banners, Signage
          </LinkedItem>
          <LinkedItem to="/products/presentation_folders">
            Presentation Folders
          </LinkedItem>
          <LinkedItem to="/products/hangtags">
            Hang Tags
          </LinkedItem>
          <LinkedItem to="/products/color_prints">
            Color / B&W Prints
          </LinkedItem>
          <LinkedItem to="/products/order_invoices">
            Order / Invoice Forms
          </LinkedItem>
          <LinkedItem to="/products/stationery">
            Stationery
          </LinkedItem>
          <LinkedItem to="/products/thermography">
            Thermography (Raised Print)
          </LinkedItem>
          <LinkedItem to="/products/counter_cards">
            Counter Card
          </LinkedItem>
          <LinkedItem to="/products/booklets">
            Booklets
          </LinkedItem>
          <LinkedItem to="/products/invitations">
            Invitations
          </LinkedItem>
        </Menu>
      </div>
    );
  }
}
export default SideMenu;
