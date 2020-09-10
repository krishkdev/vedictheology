import React, { useState } from "react";
import { Button, PageHeader, Tooltip, Avatar, Menu, Dropdown} from "antd";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Styles from './NavbarContent.module.css';
import { Link } from "react-router-dom";

const NavLinks = [
  {
    id : 1,
    title : 'Gallery',
    path : '/gallery'
  },
  {
    id : 2,
    title : 'About Vedas',
    path : '/about'
  },
  {
    id : 3,
    title : 'Donate',
    path : '/donate'
  },
  {
    id : 4,
    title : 'Contact us',
    path : null
  }
];

const menu = (
  <Menu style={{ width: 256, textAlign:"center",background:"orange",transition:"ease-out" }}>
    {NavLinks.map((e) => {
      return (
        <>
        <Menu.Item key={e.id}>
        <Link to={e.path}>
        <h3>{e.title}</h3>
        </Link>
        </Menu.Item>
      <Menu.Divider />
      </>
      )})}
  </Menu>
);

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    
  }
  return (
    <PageHeader className={Styles.header} >
        <Link to="/" className={Styles.links}>
        <Tooltip title="In consent of COVID-19, our gurukulam needs some donation. Click here to offer your donation" placement="bottomRight" defaultVisible><Avatar src="https://image.flaticon.com/icons/svg/119/119943.svg" size={50} shape="square" /></Tooltip>
        <span className={Styles.heading}>Vedictheology</span>
        <span className={Styles.subs}>Sri Shanthibini Gurukulam Trust</span>
        </Link>
        <div className={Styles.navs}>
          {NavLinks.map((e) => {return <Link to={e.path}><Button key={e.id} color="#800080" className={Styles.btn} >{e.title}</Button></Link>} )}

           <Dropdown className={Styles.menu} overlay={menu} trigger={['click']}>
            <MenuOutlined />
          </Dropdown>
          {/* <MenuOutlined  />
          <CloseOutlined /> */}
          </div>
      </PageHeader>

  );
};

export default NavBar;
