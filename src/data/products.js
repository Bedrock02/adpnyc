import React from 'react';
import { Image } from 'semantic-ui-react';
import BrochuresImg from '../../public/static/images/adp_brochures.jpg';
import BusinessCardsImg from '../../public/static/images/adp_business_cards.jpg';
import PostcardsImg from '../../public/static/images/adp_postcards.jpg';
import PostersImg from '../../public/static/images/adp_posters.jpg';
import PresentationFoldersImg from '../../public/static/images/adp_presentation_folders.jpg';
import HangTagsImg from '../../public/static/images/adp_digital_ht.jpg';
import ColorPrintImg from '../../public/static/images/adp_ls_color.jpg';
import OrderInvoiceImg from '../../public/static/images/adp_order_invoice.jpg';
import StationeryImg from '../../public/static/images/adp_stationery.jpg';
import ThermoImg from '../../public/static/images/adp_thermo.png';
import CounterCards from '../../public/static/images/adp_cc_iam_cc.jpg';
import BookletsImg from '../../public/static/images/adp_lookbooks.jpg';
import InvitationImg from '../../public/static/images/adp_invite.jpg';

const products = [
  {
    name: 'Brochures',
    image: (<Image src={BrochuresImg} centered={"true"}/>),
  },
  {
    name: 'Business Cards',
    image: (<Image src={BusinessCardsImg} centered={"true"}/>),
  },
  {
    name: 'Postcards',
    image: (<Image src={PostcardsImg} centered={"true"}/>)
  },
  {
    name: 'Posters, Banners, Signage',
    image: (<Image src={PostersImg} centered={"true"}/>)
  },
  {
    name: 'Presentation Folders',
    image: (<Image src={PresentationFoldersImg} centered={"true"}/>)
  },
  {
    name: 'Hang Tags',
    image: (<Image src={HangTagsImg} centered={"true"}/>),
  },
  {
    name: 'Color / B&W Prints',
    image: (<Image src={ColorPrintImg} centered={"true"}/>),
  },
  {
    name: 'Order / Invoice Forms',
    image: (<Image src={OrderInvoiceImg} centered={"true"}/>),
  },
  {
    name: 'Stationery',
    image: (<Image src={StationeryImg} centered={"true"}/>),
  },
  {
    name: 'Thermography (Raised Print)',
    image: (<Image src={ThermoImg} centered={"true"}/>),
  },
  {
    name: 'Counter Card',
    image: (<Image src={CounterCards} centered={"true"}/>),
  },
  {
    name: 'Booklets',
    image: (<Image src={BookletsImg} centered={"true"}/>),
  },
  {
    name: 'Invitations',
    image: (<Image src={InvitationImg} centered={"true"}/>),
  }
];

export default products;
